import React from "react"
import { useConnect } from "simple-web3-sdk"
import styled from "styled-components"

export const ConnectView = () => {
  const connectWallet = useConnect()

  return <GreenText onClick={connectWallet}>Connect Wallet</GreenText>
}

const GreenText = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Spartan;
  font-weight: 500;
  color: #ffffff;
  width: max-content;
  height: 18px;
  background-color: green;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 17px 20px 15px 20px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
`
