import "./App.css"
import Admin from "./components/Admin/Admin"
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
