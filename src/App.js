import './App.css'
// import Inline from './components/Inline'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
// import ClassClick from './components/ClassClick'
// import FunctionClick from './components/FunctionClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import Counter from './components/Counter'

// import { Greet } from './components/Greet'
// import Message from './components/Message'
// import Hello from './components/Hello'
// import Welcome from './components/Welcome'

import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className='App'>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter />
      <Message />
      <Greet name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet> */}
      {/* <Greet name='Diana' heroName='Wonder Woman' /> */}
      {/* <Welcome name='Bruce' heroName='Batman' />
      <Welcome name='Clark' heroName='Superman' />
      <Welcome name='Clark' heroName='Superman' /> */}

      {/* <Hello /> */}
    </div>
  )
}

export default App
