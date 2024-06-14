import "./ProductList.css"
import Product from "./Product"
import { useEffect } from "react"

// function ProductList(){
    // let products =[
    //     {
    //         id: 1,
    //         name:"Ford Mustang 429",
    //         price:"Rs. 4.3 cr",
    //         imgUrl:"https://cdn.dribbble.com/users/763861/screenshots/15413190/media/cf9caaad0c1d18768e6b7826b04fdb6f.jpg"
    //     },
    //     {
    //         id: 2,
    //         name:"Land Cruiser J70",
    //         price:"Rs. 53 Lakhs",
    //         imgUrl:"https://cdn.dribbble.com/users/763861/screenshots/17384434/media/52fc34f0c5cdc276f443b3f0d0550a9c.png?resize=1600x1200&vertical=center"
    //     },
    //     {
    //         id: 3,
    //         name:"FSC Żuk",
    //         price:"Rs. ---- ",
    //         imgUrl:"https://cdn.dribbble.com/users/763861/screenshots/15878229/media/79c087024dc0ace9b74b2035fd0a2013.png?resize=1600x1200&vertical=center"
    //     }
    // ]

//     return (
//         <section className="product_list">
//             {
//             products.map((prod)=>
//             {return(
//             <Product
//             name={prod.name}
//             imgUrl={prod.imgUrl}
//             price={prod.price}
//             />)})
//             }
//         </section>
//     )
// }

// export default ProductList

function ProductList() {

let [product,setProduct] = useState([])

useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })

        .then((response) => {
            return response.json()}
            )
        .then((data) => {
            console.log(data);
            setProduct(data);
        })
        .catch((err) => {
            console.log(err);
        })
}, []);



return (
    <section className="product_list">

        {
            product.map((prod)=>{
                return (
                    <Product
                    ImgUrl={prod.image}
                    name={prod.name}
                    Price={prod.price}
                    />
                )
            })
        }
    </section>
)
} 

export default ProductList
