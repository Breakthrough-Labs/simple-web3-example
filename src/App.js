import React from "react"
import { SimpleWeb3Provider } from "simple-web3-sdk"
import "./App.css"
import logo from "./logo.svg"

function App() {
  return (
    <SimpleWeb3Provider
      settings={{
        apiKey: process.env.API_KEY,
        isTesting: true,
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </SimpleWeb3Provider>
  )
}

export default App
