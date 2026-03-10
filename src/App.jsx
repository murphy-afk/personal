import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Play from './pages/Play'
import WelcomePage from './pages/WelcomePage'
import Guess from './pages/Guess'
import Snake from './pages/Snake'
import Memory from './pages/Memory'
import GamesLayout from './layouts/GamesLayout'
import PixelPainter from './pages/PixelPainter'
import PageNotFound from './pages/PageNotFound'


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
        <Route path='/' element={<GamesLayout />}>
          {/* <Route path='/play/guess' element={<Guess />} /> */}
          {/* <Route path='/play/snake' element={<Snake />} /> */}
          {/* <Route path='/play/memory' element={<Memory />} /> */}
          {/* <Route path='/play/pixelpainter' element={<PixelPainter />} /> */}
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
