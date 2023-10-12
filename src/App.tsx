import React from "react";
import { styled } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Screens from './screens';
import Payment from './screens/payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screens />,
  },
  {
    path: "/payment/*",
    element: <Payment />,
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

