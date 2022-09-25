import { NextFunction, Request, Response } from "express";
import { User } from "../domain/User";
import { errorHandler } from "../middlware/errorHandler";

import * as userService from "../service/userService";


  export const getAllUsers = (req: Request, res: Response, nextFunction: NextFunction) => {
    userService
    .getAllUsers()
    .then(data => res.json(data))
    .catch(err => errorHandler(err, req, res, nextFunction))
  };

  export const getUser = (req: Request, res: Response, nextFunction: NextFunction) => {
      const {userId} = req.params;

      userService
      .getUser(+userId)
      .then(data => res.json(data))
      .catch(err => errorHandler(err, req, res, nextFunction))

  };

  export const createUser = (req: Request, res: Response, next: NextFunction) => {

    const payload: User = req.body;

    userService
    .createUser(payload)
    .then(data => res.json(data))
    .catch(err => errorHandler(err, req, res, next))

  };

  export const updateUser = (req: Request, res: Response) => {

  };

  export const deleteUser = (req: Request, res: Response) => {

  };