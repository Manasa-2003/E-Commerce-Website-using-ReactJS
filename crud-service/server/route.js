import express from 'express';
import { getProducts,getUsers } from '../controller/product-controller.js';
//import {getUsers} from '../controller/user-controller.js';


const router = express.Router();
router.get('/prod',getProducts)
router.get('/', getUsers);
/*router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);*/

export default router;