import express from "express";
import { newTask } from "../controller/task.js";
import { getMyTask } from "../controller/task.js";
import { updateTask } from "../controller/task.js";
import { deleteTask } from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();


router.get('/users/task/my',isAuthenticated,getMyTask)
router.post('/users/task/new',isAuthenticated,newTask)
router.put('/users/task/:id',isAuthenticated,updateTask)
router.delete('/users/task/:id',isAuthenticated,deleteTask)


export default router;