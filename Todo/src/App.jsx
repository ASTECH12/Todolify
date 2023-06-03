import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import TodoForm from './Components/TodoForm'
import Moon from '/icon-moon.svg'
import Sun from '/icon-sun.svg'
import TodoContainer from './Components/TodoContainer'

function App() {
   // The dark mode stae
   const [mode , setMode] = useState(false)
   // function to handle the theme mode 
   function handleThemeMode(){
     (mode) ? setMode(false) : setMode(true) 
   
 
   }
   const icon = (mode === false) ? Sun : Moon
   const theme = (mode !== false) ? 'body body' : 'body body-dark'

  return (
    <>
    <div className={theme}>
    <main className="app">
      <div className="container">
          <Header 
          theme={handleThemeMode} icon={icon}
          
          />
          <TodoForm />
      </div>
    </main>
    </div>

      
    </>
  )
}

export default App
