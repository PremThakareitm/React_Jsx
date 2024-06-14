const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pms')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));



// Define Product schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imageURL: String,
    category: String,
    quantity:Number
});

const productModel = mongoose.model('products', productSchema);

app.use(express.json());
app.use(cors());

// Create a new product
app.post('/products', async (req, res) => {
    try {
        await productModel.create(req.body)
        res.status(201).send({message:"Product Created"});
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await productModel.find();
        res.send(products);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Get a single product
app.get('/products/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// Update a product
app.put('/products/:id', getProduct, async (req, res) => {
    try {
        const { name, price, imageURL, quantity, category } = req.body;
        res.product.name = name;
        res.product.price = price;
        res.product.imageURL = imageURL;
        res.product.quantity = quantity;
        res.product.category = category;
        await res.product.save();
        res.send(res.product);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// Delete a product
app.delete('/products/:id', getProduct, async (req, res) => {
    try {
        await res.product.deleteOne();
        res.send({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

async function getProduct(req, res, next) {
    let product;
    try {
        product = await productModel.findById(req.params.id);
        if (product == null) {
            return res.status(404).send({ message: 'Product not found' });
        }
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }

    res.product = product;
    next();
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});