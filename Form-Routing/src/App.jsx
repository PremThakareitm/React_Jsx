import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import CreateProduct from './pages/CreateProduct'
import Products from './pages/Products'

function App() {
 
  return (
    <>
       


        <BrowserRouter>

            <Routes>

                <Route path='form' element={<CreateProduct/>}/>

                <Route path='about' element={<About/>}/>

                <Route path='products' element={<Products/>}/>

            </Routes>
        
        </BrowserRouter>



    </>
  )
}

export default App
