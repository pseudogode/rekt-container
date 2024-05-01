import { CssBaseline } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import Header from "./core/components/header"
import Piece from "./core/components/temporary/dnd-table"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline/>
      <Header></Header>
      <Piece></Piece>
    </BrowserRouter>
  )
}

export default App
