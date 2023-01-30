import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { contextToken } from "../contexts/contextAPI"

import Home from "../pages/login/Login"
import Register from "../pages/register/Register"
import Subscriptions from "../pages/subscriptions/Subscriptions"
import Purchase from "../pages/purchase/Purchase"
 
function App() {
  const tokenOnLocal = localStorage.getItem("token")
  const [_token, setToken] = useState(tokenOnLocal)

  function setPersistenceToken(token) {
    setToken(token)
    localStorage.setItem("token", token)
  }

  return (
    <>
    <contextToken.Provider value={{_token, setToken, setPersistenceToken}} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/:idSubs" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </contextToken.Provider>
    </>
  )
}

export default App
