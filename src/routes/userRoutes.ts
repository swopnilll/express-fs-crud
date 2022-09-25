import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controller/userController";



export const userRouter = Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:userId', getUser);

userRouter.post('/', createUser);

userRouter.put('/:userId', updateUser);

userRouter.delete('/:userId', deleteUser);