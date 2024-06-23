import mongoose, { ConnectOptions } from "mongoose";
import { ConnectionOptions } from "tls";

type connectionObject = {
    isConnected?: number;
}

const connection : connectionObject = {}

export async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log('db already connected!');
        return
    }  
    try{
        const db = await mongoose.connect(process.env.DATABASE_URL || '');
        connection.isConnected = db.connections[0].readyState
        console.log('DB connected successfully....')
    }catch(error){
        console.log('DB connection failed....')
    }
    
}
