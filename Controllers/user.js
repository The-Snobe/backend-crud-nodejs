import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';



const saltRound = 10;

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
    const {name, email, password} = req.body;
    const id = uuidv4();

    const user = await prisma.user.create({
        data: {
            id: id,
            name,
            email,
            password: bcrypt.hashSync(password, saltRound)
        }
    })
    if(user){
    return res.status(200).json({ status: 'Success', user });
    }else{
        return res.status(400).json(user);
    }
}

export const login = async (req, res) =>  {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if (user) {
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (isPasswordValid) {
            return res.status(200).json({ status: 'Success', user });
            //res.status(200).json(user);
        } else {
           return res.status(400).json({ message: "Invalid password" });
        }
    } else {
        return  res.status(400).json({ message: "User not found" });
    }
}

export const logout = async (req, res) =>{
    //TODO: implement logout
    res.status(200).json({ message: "Logout successful" });
}