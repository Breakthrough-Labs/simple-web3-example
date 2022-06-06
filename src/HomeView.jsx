import React, { useEffect, useState } from "react"
import { useAccount, useContract, useConnect } from "simple-web3-sdk"
import styled from "styled-components"

export const HomeView = () => {
  const connectWallet = useConnect()
  const account = useAccount()

  const contract = useContract("Waifu House DAO")

  const [hearts, setHearts] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (!contract) return
    contract.api.HEARTS_PERIOD().then(({ data, error }) => {
      setHearts(data)
      setError(error)
    })
  })

  let content
  if (!account) {
    content = <GreenText onClick={connectWallet}>Connect Wallet</GreenText>
  } else {
    content = (
      <div>
        {hearts && <div>Hearts period: {hearts}</div>}
        {error && <div>Error: {error}</div>}
      </div>
    )
  }

  return <Container>{content}</Container>
}

const Container = styled.div`
  display: flex;
`

const GreenText = styled.div`
  background-color: green;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
`
