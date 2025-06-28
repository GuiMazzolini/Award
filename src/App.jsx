import Hero from './components/hero';
import About from './components/About';
import NavBar from './components/NavBar';
import Features from './components/Features';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>

  )
}

export default App;