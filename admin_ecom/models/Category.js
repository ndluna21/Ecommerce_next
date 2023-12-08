import mongoose from "mongoose";
import { model } from "mongoose";

const { Schema, models } = require("mongoose");

const  CategorySchema = new Schema({
    name: {type:String, required: true},
    parent: {type:mongoose.Types.ObjectId, ref:'Category'},
    properties: [{type:Object}]
})

export const Category = models?.Category || model('Category', CategorySchema)