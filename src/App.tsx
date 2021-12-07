import React from "react"
import { HashRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Routes from "./routes"
import ApolloProvider from "./services/apollo/ApolloProvider"
import ErrorBoundary from "./services/errors/ErrorBoundary"
import Web3Provider from "./services/web3/Web3Provider"
import { ThemeProvider } from "./theme"
import "./theme/App.scss"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ErrorBoundary>
          <RecoilRoot>
            <Web3Provider>
              <ApolloProvider>
                <HashRouter>
                  <Header />
                  <Routes />
                  <Footer />
                </HashRouter>
              </ApolloProvider>
            </Web3Provider>
          </RecoilRoot>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  )
}
export default App
