import '../src/index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Form from './components/Form'

const App = () => {
  return (
    <div className='bg-[url(../src/assets/img/background-mobile.png)] h-full font-inconsolata'>
      <NavBar/>
      <Hero/>
      <Form/>
    </div>
  )
}

export default App