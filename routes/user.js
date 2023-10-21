import express from "express";
import { getAllUser } from "../controller/user.js";
import { register } from "../controller/user.js";
import { getMyProfile } from "../controller/user.js";
import { login } from "../controller/user.js";
import { logOut } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router=express.Router();

// router.post('/users/new',createUser)
// router.put('/users/:_id',updateUser)
// router.delete('/users/:_id',deleteUser)


router.get('/users/all',getAllUser)
router.post('/users/new',register)
router.post('/users/login',login)
router.get('/users/logout',logOut)
router.get('/users/me',isAuthenticated,getMyProfile)



export default router;