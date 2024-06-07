import express from "express";
import bodyparser from "body-parser";
import bookRoutes from "./src/route/bookRoute.js";
import databaseConnection from './src/config/database.js';

import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3001' // Allow only this origin
  }));

  
app.use(bodyparser.json());
app.use('/api',bookRoutes);

app.listen(port,()=>{
    databaseConnection();
    console.log('Server is runninng on http://localhost:' + port);
}); 