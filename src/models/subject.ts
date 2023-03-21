import { ObjectId, Schema, model } from "mongoose";

export interface Subject {
    _id: string;
    name:{
        type: String,
        required:true,
    };
    users:{
        type: [Schema.Types.ObjectId],
        ref:'users',
    };
    semester:{
        type: Number,
        required:true,
    };
    difficulty:{
        type: String,
        enum: ["easy", "medium", "hard"],
        required:true,
    };
};