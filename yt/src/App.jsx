import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main/Main'

function App() {
  return (
    <>
    <div className='flex'>
    <Sidenav />
     <Main />
    </div>
   </>
  )
}

export default App
