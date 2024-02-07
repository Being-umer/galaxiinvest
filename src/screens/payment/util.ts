/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const API_BASE_URL = "https://api.galaxiinvest.com";

export function hexToDecimalAndDivide(hexString: string) {
  // Using parseInt with base 16 (hexadecimal) to convert to decimal
  const subscriptionFees = hexString.split("0x")[1];
  const decimalNumber = parseInt(subscriptionFees, 16);

  // Divide by 10^18 (1 followed by 18 zeros)
  const dividedValue = decimalNumber / Math.pow(10, 18);
  return dividedValue;
}

export const chainCredentials = {
  chainId: "",
  rpcUrls: [],
  adminWalletAddress: "",
  subscriptionFees: "",
  chainName: "",
  nativeCurrency: {
    symbol: "",
    decimals: 0,
  },
  blockExplorerUrls: [""],
};

export const membershipVerification = async (
  body: unknown,
  token: string
): Promise<unknown> => {
  return await putRequest("/users/membership/verify", body, {}, token);
};

export const putRequest = async (
  url: string,
  body: unknown,
  config: any,
  token: string
) => {
  const extraHeaders = getTokenHeader(token);
  try {
    return axios.put(API_BASE_URL + url, body, {
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...extraHeaders,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAuthorizedUser = async (token:string) => {
  const extraHeaders = getTokenHeader(token);
  return axios.get(API_BASE_URL + "/users/me", {
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
  });
};

export const getChainCreds = async (token:string) => {
  const extraHeaders = getTokenHeader(token);
  return axios.get(API_BASE_URL + "/users/payment/details", {
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
  });
};

export const getTokenHeader = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};
