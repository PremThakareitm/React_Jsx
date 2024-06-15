import { useState } from 'react'
import './CreateProduct.css'
function CreateProduct() {

    let [product,setProduct] = useState({})
    
    function handleInput()
    {
       let copyProduct = {...product}
       copyProduct[event.target.name] = event.target.value 
       setProduct(copyProduct)

    //    shorthand 

        // setProduct({...product,[event.target.name]:event.target.value })
    }


    function handleSubmit()
    {
        event.preventDefault()

        console.log(product)

        fetch("url",{
            method:"POST",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((respone)=>{})
        .catch((err)=>{})



    }


  return (
    <>
            <section className='form-parent'>

                <form className='form' onSubmit={handleSubmit}>

                        <h1>Add Product</h1>

                    
                        <input className='inp' required name='name' type="text" placeholder='Enter Name'
                        onChange={handleInput}
                         />

                        <input className='inp' name='price' type="text" placeholder='Enter Price' 
                        onChange={handleInput}
                        />

                        <input className='inp' name='category' type='text' placeholder='Enter Category'
                        onChange={handleInput}
                        />

                        <input className='inp' name='quantity' type='number' placeholder='Enter Quantity'
                         onChange={handleInput}
                        />

                        <input className='inp' name='description' type='text' placeholder='Enter Description'
                        onChange={handleInput}
                        />

                        <button type='submit' className='btn'>Add</button>

                </form>


            </section>
    
    
    </>

  )
}

export default CreateProduct