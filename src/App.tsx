import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from "./components/partials/Header"
import Footer from './components/partials/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
