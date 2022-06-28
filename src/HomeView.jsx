import React, { useEffect, useState } from "react";
import { useConnect, useContract, utils } from "simple-web3-sdk";
import styled from "styled-components";

export const HomeView = () => {
  const { connect, isConnected } = useConnect();

  const contract = useContract("Combined NFT and Sale");

  const [saleIsActive, setSaleIsActive] = useState();
  const [maxSupply, setMaxSupply] = useState();
  const [supply, setSupply] = useState();
  const [price, setPrice] = useState();

  const [error, setError] = useState();

  const mintNft = async () => {
    const { data, error } = await contract.api.mint(1, {
      value: utils.parseWei(price),
    });
    if (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!isConnected) return;
    contract.api.saleIsActive().then(({ data }) => setSaleIsActive(data));
    contract.api.MAX_SUPPLY().then(({ data }) => setMaxSupply(data.toNumber()));
    contract.api.totalSupply().then(({ data }) => setSupply(data.toNumber()));
    contract.api.currentPrice().then(({ data }) => setPrice(data.toNumber()));
  }, [contract, isConnected]);

  return (
    <Container>
      {isConnected ? (
        <div>
          <div>Max Supply: {maxSupply}</div>
          <div>Supply: {supply}</div>
          <div>Price: {price}</div>
          {saleIsActive && <Button onClick={mintNft}>Mint NFT</Button>}
          <Error>{error}</Error>
        </div>
      ) : (
        <Button onClick={connect}>Connect Wallet</Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
`;

const Button = styled.div`
  background-color: gray;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const Error = styled.div`
  color: red;
  max-width: 1000px;
`;
