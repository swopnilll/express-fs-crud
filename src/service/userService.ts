import { Request, Response } from "express";
import { Success } from "../domain/Success";
import { User } from "../domain/User";

import * as userModel from "../model/UserModel";


export const getAllUsers = async(): Promise<Success<User[]>> => {
    const users = await userModel.getAllUser();

    return {
        data: users,
        message: 'Users fetched successfully',
      };

};

export const getUser = async (id: number): Promise<Success<User>> => {
    const user = await userModel.getUser(id);


    return {
        data: user,
        message: 'Users fetched successfully',
      };
};

export const createUser = async (payload: User) => {
    const response = await userModel.createUser(payload);

    return {
        data: response,
        message: 'Users fetched successfully',
      };

};

export const updateUser = (req: Request, res: Response) => {

};

export const deleteUser = (req: Request, res: Response) => {

};