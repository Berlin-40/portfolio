import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Activities from './components/Activities'
import { useState } from 'react'

function App() {
  const [highlight, setHighlight] = useState(false);
  function handleClick (){
    setHighlight(true);
    setTimeout(() => setHighlight(false), 10000);
  };

  return (
    <div>
      <div className='p-5 md:px-[15%]'>
        <Navbar/>
        <Home highlight={highlight}/>
      </div>
      <div>
        <About/>
      </div>
      <div className='p-5 md:px-[15%]'>
        <Educations/>
      </div>
      <div className='p-5 md:px-[15%]'>
        <Projects/>
      </div>
      <div className='p-5 md:px-[15%]'>
        <Activities handleClick={handleClick}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
