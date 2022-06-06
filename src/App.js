import React from "react"
import { SimpleWeb3Provider } from "simple-web3-sdk"
import "./App.css"
import { ConnectView } from "./ConnectView"

function App() {
  return (
    <SimpleWeb3Provider
      settings={{
        apiKey: process.env.API_KEY,
        isTesting: true,
      }}
    >
      <ConnectView />
    </SimpleWeb3Provider>
  )
}

export default App
