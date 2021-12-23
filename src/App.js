import './App.css'

import { Greet } from './components/Greet'
// import Hello from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman' />
      <Welcome name='Bruce' heroName='Batman' />
      <Welcome name='Clark' heroName='Superman' />
      <Welcome name='Clark' heroName='Superman' />

      {/* <Hello /> */}
    </div>
  )
}

export default App
