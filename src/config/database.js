import mongoose from "mongoose";

const URL = 'mongodb://localhost:27017/express-online-bookstore';

const databaseConnection = () => {
    mongoose.connect(URL);
    mongoose.set("strictQuery",true);
};

export default databaseConnection;