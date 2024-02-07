import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const deleteUser = async (token: string) => {
    await axios.delete("https://api.galaxiinvest.com/users/delete-me", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  const handleDelete = async () => {
    try {
      const response = await axios.post(
        "https://api.galaxiinvest.com/users/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        deleteUser(response.data.token);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  return (
    <Container>
      <Form>
        <H1>Delete User Form</H1>
        <label htmlFor="email">Email</label>
        <INPUT
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <INPUT
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BUTTON type="button" onClick={handleDelete}>
          Delete Me
        </BUTTON>
      </Form>
    </Container>
  );
};

export default LogIn;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
`;
const Form = styled.div`
  width: 30%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: white;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 50px 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const INPUT = styled.input`
  width: 100%;
  padding: 5px;
`;
const H1 = styled.h1`
  align-self: center;
`;
const BUTTON = styled.button`
  margin-top: 20px;
  align-self: center;
  padding: 10px;
  background-color: #1d1752;
  color: white;
  border: none;
`;
