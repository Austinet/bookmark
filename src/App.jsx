import "./css/App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default App