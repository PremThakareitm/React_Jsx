import { useEffect, useState } from 'react'
import styles from './Products.module.css'
import {Link} from 'react-router-dom'

function Products() {

    let [products,setProducts] = useState([])
    


    // to fetch all products on component load

    useEffect(()=>{

        fetch("http://localhost:3000/products",{
            method:"GET"
        })
        .then((response)=>{          
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])


    // to delete a product on click 

    function deleteProduct(id)
    {
        console.log(id)

        fetch("http://localhost:3000/products/"+id,{
            method:"DELETE"
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{

            console.log(data)
            let copyProducts = [...products]

            let index = copyProducts.findIndex((product)=>{
                return product._id === id
            })

            copyProducts.splice(index,1)

            setProducts(copyProducts)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (

    <section className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.container_title}>All Products</h1>
            <Link to="/Create">
            <i className={"fa-solid fa-circle-plus "+styles.createBtn}></i>
            </Link>
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {

                    products.map((product,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <img className={styles.pro_img} src={product.imageURL}/>
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <Link to={"/product/"+product._id}>
                                        <i className={"fa-solid fa-eye " + styles.icon_view}></i>
                                        </Link>
                                        <Link to={"/update/"+product._id}>
                                        <i className={"fa-solid fa-pen-to-square "+styles.icon_update}></i>
                                        </Link>
                                        
                                        <i className={"fa-solid fa-trash "+styles.icon_delete} onClick={()=>{
                                            deleteProduct(product._id)
                                        }}></i>
                                    </div> 
                                </td>
                            </tr>
                        )
                    })

                }



            </tbody>

        </table>


    </section>

    )
}

export default Products