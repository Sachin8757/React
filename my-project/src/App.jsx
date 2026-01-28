import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hook from './component/hook.jsx'
import Botton from './component/botton.jsx'
import Card from './component/Card.jsx'
import Likebutton from './component/Likebutton.jsx'
import Loodo from './component/Loodo.jsx'
import TodoList from './component/TodoList.jsx'
import Lottery from './component/Lottery.jsx'

function App() {
  return (
    /*<div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
    <div class="backdrop-blur-lg bg-white/20 p-10 rounded-2xl shadow-xl"> 
    <h1 class="text-white text-2xl font-bold">Welcome</h1> 
  </div>
   </div>
  */

<div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black flex justify-center items-center ">
  <TodoList/>
</div>

/* <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
</div> */

/*<div class="min-h-screen bg-slate-900 bg-[radial-gradient(circle_at_1px_1px,#ffffff1a_1px,transparent_0)] bg-[size:20px_20px]">
</div>*/

/* <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center">
  <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl">
     Todo App Here 
  </div>
</div> */





  )
}

export default App
