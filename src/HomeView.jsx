import React, { useEffect, useState } from "react"
import { useAccount, useConnect, useContract } from "simple-web3-sdk"
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
  }, [contract])

  return (
    <Container>
      {account ? (
        <div>
          {hearts && <div>Hearts period: {hearts}</div>}
          {error && <div>Error: {error}</div>}
        </div>
      ) : (
        <GreenText onClick={connectWallet}>Connect Wallet</GreenText>
      )}
    </Container>
  )
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
