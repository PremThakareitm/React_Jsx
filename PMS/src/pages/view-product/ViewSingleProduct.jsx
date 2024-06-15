import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ViewSingleProduct.module.css';

function ViewSingleProduct() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${params.id}`, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            return response.json();
        })
        .then(data => {
            setProduct(data);
        })
        .catch(err => {
            setError(err.message);
        });
    }, [params.id]);

    function viewProduct() {
        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!product) {
            return <div>Loading...</div>;
        }

        return (
            <div className={styles.container}>
                <h1>{product.name}</h1>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <img className={styles.pro_img} src={product.imageURL} alt={product.name} />
            </div>
        );
    }

    return (
        <div>
            {viewProduct()}
        </div>
    );
}

export default ViewSingleProduct;
