import React from "react";
import { styled } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Screens from "./screens";
import Payment from "./screens/payment";
import LogIn from "./screens/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screens />,
  },
  {
    path: "/payment/*",
    element: <Payment />,
  },
  {
    path: "/payment/*",
    element: <Payment />,
  },
  {
    path: "/delete-me",
    element: <LogIn />,
  },
]);
function App() {
  return (
    <Body>
      <RouterProvider router={router} />
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100%;
  height: 100vh;
`;
