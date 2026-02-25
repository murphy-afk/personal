import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Play from './pages/Play'


function App() {

  return (
    <BrowserRouter>
    <AppLayout >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/play' element={<Play />} />
      </Routes>
    </AppLayout>
    </BrowserRouter>
  )
}

export default App
