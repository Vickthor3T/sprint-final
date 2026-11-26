import { Request, Response } from "express";

import { User } from "../models/user.model.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Error al crear usuario",
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error al consultar usuarios",
    });
  }
};
