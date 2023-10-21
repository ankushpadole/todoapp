import ErrorHandler from "../middlewares/error.js";

import { Task } from "../models/task.js"

export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        await Task.create({
            title,
            description,
            user: req.user
        })
        res.status(201).json({
            success: true,
            message: "Task Created Successfully!"
        })
    } catch (error) {
        next(error);
    }

}


export const getMyTask = async (req, res, next) => {
    try {
        const userid = req.user._id;
        const Tasks = await Task.findOne({ user: userid })
        res.status(201).json({
            success: true,
            Tasks
        })
    } catch (error) {
        next(error)
    }
}



export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const Tasks = await Task.findById(id)
        if (!Tasks) return next(new ErrorHandler("Task Not Found!", 404));


        Tasks.isCompleted = !Tasks.isCompleted;

        await Tasks.save();
        res.status(201).json({
            success: true,
            message: "Task Updated!"
        })
    } catch (error) {
        next(error)
    }
}


export const deleteTask = async (req, res, next) => {
    try {

        const { id } = req.params;
        const Tasks = await Task.findById(id);

        if (!Tasks) return next(new ErrorHandler("Task Not Found!", 404));


        await Tasks.deleteOne();
        res.status(201).json({
            success: true,
            message: "Task Deleted!"
        })
    } catch (error) {
        next(error)
    }
}