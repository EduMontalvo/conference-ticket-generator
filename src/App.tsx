import '../src/index.css'
import Form from './components/Form'

const App = () => {
  return (
    <div className='bg-[url(../src/assets/img/background-mobile.png)] min-h-screen bg-cover bg-no-repeat bg-center font-inconsolata flex flex-col'>
      <Form/>
    </div>
  )
}

export default App