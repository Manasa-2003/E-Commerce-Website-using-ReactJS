import User from '../model/user.js';
import Product from '../model/product.js';


export const getProducts = async (request, response) => {
    try{
        const products = await Product.find();
        response.status(200).json(products);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}



export const getUsers = async (request, response) => {
    try{
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}