import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Metamask } from "../../assets";
import {
  getAuthorizedUser,
  getChainCreds,
  chainCredentials,
  hexToDecimalAndDivide,
  membershipVerification,
} from "./util";
import { primary_color } from "../../assets/colors";
import { ethers } from "ethers";

// const Injected = new InjectedConnector({
//   supportedChainIds: [9731],
// });

const Payment = () => {
  let provider: ethers.BrowserProvider;
  const authCode = window.location.href
    .split("payment/")[1]
    .replace(/\//g, ".");

  const [loading, setLoading] = useState(true);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner>();
  const [Provider, setProvider] = useState<ethers.BrowserProvider>();
  const [account, setAccount] = useState<string>();
  const [TXHash, setTXHash] = useState<string>();
  const [chainCreds, setChainCreds] = useState(chainCredentials);
  const [toggleAlert, setToggleAlert] = useState({
    alert: false,
    msg: "Please Wait",
  });

  useEffect(() => {
    chainCredsApi();
    authorizedUser();
    connect();
  }, []);

  const connect = async () => {
    try {
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        // provider = ethers.getDefaultProvider(chainCreds.rpcUrls[0]);
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        const sign: ethers.JsonRpcSigner = await provider.getSigner();
        setSigner(sign);
        setAccount(sign.address);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyMembership = async (res: unknown) => {
    await membershipVerification({ txHash: res, from: account }, authCode);
  };

  const authorizedUser = async () => {
    try {
      const user = await getAuthorizedUser(authCode);
      if (user.data.user.membership === "taken") {
        setToggleAlert({ alert: true, msg: "Membership Already Taken" });
        return;
      }
      setToggleAlert({ alert: false, msg: "" });
    } catch (error) {
      console.log(error);
      setToggleAlert({ alert: true, msg: "Invalid User" });
    }
  };

  const chainCredsApi = async () => {
    try {
      const user = await getChainCreds(authCode);
      if (user.data) {
        setChainCreds(user.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const changeQIchain = async () => {
    try {
      if (Provider) {
        await Provider?.send("wallet_addEthereumChain", [
          {
            chainId: chainCreds.chainId,
            chainName: chainCreds.chainName,
            blockExplorerUrls: chainCreds.blockExplorerUrls,
            nativeCurrency: { ...chainCreds.nativeCurrency },
            rpcUrls: [...chainCreds.rpcUrls],
          },
        ]);
        sendTransaction();
      }
    } catch (addError) {
      console.log(addError);
    }
  };

  const sendTransaction = async () => {
    const transactionParameters = {
      to: chainCreds.adminWalletAddress, // adminWalletAddress
      from: account, // must match user's active address.
      value: chainCreds.subscriptionFees, // Only required to send ether to the recipient from the initiating external account.
      gas: "0x6b540",
      gasPrice: "0xaf16b1bb3",
    };
    try {
      if (signer) {
        const txHash: string = await signer.provider?.send(
          "eth_sendTransaction",
          [transactionParameters]
        );
        verifyMembership(txHash);
        setTXHash(txHash);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubscribe = async () => {
    connect().then(() => {
      changeQIchain().then(() => {
       
      }).catch((l)=>{
        console.log(l);
        
      })
    });
  };
  const redirectToApp = () => {
    window.location.href = "https://galaxiinvest.com";
  };
  return (
    <Container>
      <ContainerWrapper>
        <Image src={Metamask} />
        <METAMASK>M E T A M A S K</METAMASK>
        <Text2>Get hottest stock picks in the world using AI</Text2>
        {loading ? (
          <LoaderContainer>
            <Loader></Loader>
          </LoaderContainer>
        ) : (
          <>
            {toggleAlert.alert ? (
              <Text2 style={{ color: "red" }}>{toggleAlert.msg}</Text2>
            ) : (
              <>
                <TokenPrice>
                  {hexToDecimalAndDivide(chainCreds.subscriptionFees)} Qie{" "}
                  <Token>/ Year</Token>
                </TokenPrice>
                <SubscribeButtonStyled
                  disabled={toggleAlert.alert}
                  onClick={handleSubscribe}
                >
                  Subscribe now
                </SubscribeButtonStyled>
              </>
            )}
            {TXHash ? (
              <>
                <Text2>
                  Membership successfully activated! Now, let's get back to
                  enjoying your app.
                </Text2>
                <SubscribeButtonStyled
                  disabled={toggleAlert.alert}
                  onClick={redirectToApp}
                >
                  Back to App
                </SubscribeButtonStyled>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </ContainerWrapper>
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  width: 100%;
  background: ${primary_color};
  height: 100%;
`;
const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 0px 20px;
`;

const Image = styled.img``;

const SubscribeButtonStyled = styled.button`
  color: white;
  margin: 7px;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background-color: #3853a4;
  border: 2px solid #3853a4;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

const METAMASK = styled.h1`
  font-weight: 700;
  font-size: 2.5em;
  text-align: center;
  color: white;
`;

const Text2 = styled.p`
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 12px;
  font-weight: 500;
  width: 80%;
`;
const TokenPrice = styled.div`
  font-weight: 700;
  font-size: 38px;
  margin-top: 1rem;
  text-align: center;
  color: #8cc63f;
`;
const Token = styled.span`
  font-weight: 700;
  font-size: 28px;
  margin-top: 1rem;
  text-align: center;
  color: white;
`;

const LoaderContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadingAnim = keyframes`
  to {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #e8e8e8;
  border-top-color: #3853a4;
  border-radius: 50%;
  animation: ${LoadingAnim} 1s ease infinite;
`;
