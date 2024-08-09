import express from "express";
import { createUser, login, logout } from "../Controllers/user.js";

const route = express.Router();

route.post("/create", createUser);  
route.post("/login", login);
route.post("/logout", logout);

export default route;