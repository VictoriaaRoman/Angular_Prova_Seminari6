import { ObjectId, Schema, model } from "mongoose";

export interface Employee {
    _id: string;
    name: string;
    position: string;
    office: string;
    salary: number;
};

