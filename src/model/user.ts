import mongoose, {Schema, Document} from 'mongoose';

export interface Message extends Document {
    content : string,
    createdAt : Date    
}

export interface User extends Document{
    userName : string,
    email : string,
    password : string,
    isVerified : boolean,
    verifyCode : number,
    verifyCodeExp : Date,
    isAcceptingMessage : boolean,
    messages : Message[]
}


const MessageSchema: Schema<Message> = new Schema({
    content : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
        required : true
    }
})

const UserSchema : Schema<User> = new Schema({
    userName : {
        type : String,
        required : [true, "User name is required"],
        unique : true
    } ,
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true,
        match : [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Please provide valid email"]
    },
    password : {
        type : String,
        required : [true, "Password is required"],
        match : [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm, "Provide a Strong password"]
    },
    isVerified : {
        type : Boolean,
    },
    verifyCode : {
        type : Number,
        required : [true, "Verfication code is required"],
    }, 
    verifyCodeExp : {
        type : Date
    },
    isAcceptingMessage : {
        type : Boolean,
        required : true,
        default : true
    },
    messages : [MessageSchema]  
})

//because in next js we don't know that eighther the app is booting first time or after first time so we have to verify that eighter out database have that schema or not 
const UserModel  = (mongoose.models.User as mongoose.Model<User>)
                     || (mongoose.model<User>("User", UserSchema));

export default UserModel;
