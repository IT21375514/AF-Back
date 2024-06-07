import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id:{
        type : Number,
        required : [true,"id is required"],
        unique : true
    },
    title:{
        type : String,
        required : [true,"Title is required"],
        unique : true
    },
    author:{
        type:String,
        required: true,  
    },
    genre:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,  
    },
    availability:{
        type:Boolean,
        required: true,  
    },
})

const book = mongoose.model('Book',bookSchema);
export default book;