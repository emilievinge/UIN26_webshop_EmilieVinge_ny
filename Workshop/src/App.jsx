import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:id' element={<Character />} />
      </Routes>
    </Layout>
  )
}

export default App
