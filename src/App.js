import React from "react"
import { SimpleWeb3Provider } from "simple-web3-sdk"
import "./App.css"
import { HomeView } from "./HomeView"

function App() {
  return (
    <SimpleWeb3Provider
      settings={{
        apiKey: process.env.REACT_APP_API_KEY,
        isTesting: true,
      }}
    >
      <HomeView />
    </SimpleWeb3Provider>
  )
}

export default App
