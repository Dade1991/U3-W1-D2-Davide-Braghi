// import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavBar from "./components/CustomNavBar"
import CustomFooter from "./components/CustomFooter"
import CustomMainSection from "./components/CustomMainSection"

function App() {
  return (
    <>
      <CustomNavBar theme="dark" />
      <CustomMainSection />
      <CustomFooter />
    </>
  )
}

export default App
