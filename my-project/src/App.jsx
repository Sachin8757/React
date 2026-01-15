import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hook from './component/hook.jsx'
import Botton from './component/botton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Hook/>
    <Botton title="click me" bgcolor="red"onclick/>
  )
}

export default App
