import React, { useContext } from 'react'
import { ContextProvider, contextStore } from './Context/storeContext'
import Home from './Home/Home'

const App = () => {
  return (
    <div>
       <Home/>
    </div>
  )
}

export default App