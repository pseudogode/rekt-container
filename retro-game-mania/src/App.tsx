import { CssBaseline } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import Header from "./core/components/Header"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline/>
      <Header></Header>
    </BrowserRouter>
  )
}

export default App
