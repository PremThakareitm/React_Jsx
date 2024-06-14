// import { useState } from 'react'
// import './App.css'
// import Product from './components/Product.jsx'

// function App() {
//   let [name,setName] = useState("Prem")

//   function doSomething(){
//     setName("Thor")
//     console.log(name)
//     // console.log("The button was clicked")
// }

// function printName(name,age){
//   console.log(name)
// }

//   return (
//     <>
//       <h1>
//         Hey I am {name}
//       </h1>

//     <button className='btn' onClick={doSomething}>Click</button>
//     <button className='btn' onClick={printName}>Name and age</button>

//       <div className='container'>
//       <Product 
//       name="Ford Mustang Boss 429"
//       imgUrl="https://cdn.dribbble.com/users/763861/screenshots/15413190/media/cf9caaad0c1d18768e6b7826b04fdb6f.jpg"
//       price="3.5 cr" />

//       <Product 
//       name="Land Cruiser J70"
//       imgUrl="https://cdn.dribbble.com/users/763861/screenshots/17384434/media/52fc34f0c5cdc276f443b3f0d0550a9c.png?resize=1600x1200&vertical=center"
//       price="48 Lakh" />

//       <Product 
//       name="FSC Żuk"
//       imgUrl="https://cdn.dribbble.com/users/763861/screenshots/15878229/media/79c087024dc0ace9b74b2035fd0a2013.png?resize=1600x1200&vertical=center"
//       price=" --" />
//       </div>
//     </>
//   )
// }

// export default App




//Date 30 May.

import ProductList from "./components/ProductList";
import "./App.css"

function App(){
  return(
    <>
    <ProductList/>
    </>
  )
}

export default App
