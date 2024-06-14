import './Product.css'

export default function Product(props){

    
    return (
        <>
        <div className='product'>
            <div className='pro-img'>
            <img className='img' src={props.imgUrl}/>
            </div>
        <div className='details'>
            <h1>{props.name}</h1>
            <h2>₹ {props.price}</h2>
        </div>
        </div>
        </>
    )
    }

// export default Product