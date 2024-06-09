
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import CustomRouter from './CustomRouter'
import { Suspense } from 'react'
import Header from './Components/Layout/Header'
import { store } from './app/store'
import {Provider} from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Suspense fallback="Something went wrong">
      <Header/>
      <ToastContainer />      
        <CustomRouter/>
    </Suspense>
    </BrowserRouter>
    </Provider>
  )
}

export default App
