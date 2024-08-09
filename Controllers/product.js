import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const createProduct = async(req, res) =>  {

    const id = uuidv4();

    const {name, description} = req.body;

    // Create a new product

    const newProduct = await prisma.product.create({
        data: {
            id: id,
            name,
            description
        }
    })

    return res.status(200).json(newProduct);
}

export const getAllProducts = async(req, res) =>  {

    // Get all products

    const products = await prisma.product.findMany();

    if(products){
    return res.status(200).json(products);
    } else {
        return res.status(404).json({message: "No products found"});
    }
}

export const getProductById = async(req, res) =>  {

    const {id} = req.params;

    // Get product by id

    const product = await prisma.product.findUnique({
        where: {
            id: id
        }
    })

    res.status(200).json(product);
}

export const updateProduct = async(req, res) =>  {

    const {id} = req.params;
    const {name, description} = req.body;

    // Update product by id

    const updatedProduct = await prisma.product.update({
        where: {
            id: id
        },
        data: {
            name,
            description
        }
    })  
r                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    res.status(200).json(updatedProduct);

}

export const deleteProduct = async(req, res) =>  {

    const {id} = req.params;

    // Delete product by id

    const deletedProduct = await prisma.product.delete({
        where: {
            id: id
        }
    })

    res.status(200).json(deletedProduct);   
}

