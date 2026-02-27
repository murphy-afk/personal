import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Play from './pages/Play'
import WelcomePage from './pages/WelcomePage'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/' element={<AppLayout />} > 
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/play' element={<Play />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
