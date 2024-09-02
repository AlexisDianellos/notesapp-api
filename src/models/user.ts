import { InferSchemaType, Schema,model } from "mongoose"

const userSchema = new Schema({
  username:{type:String, required:true, unique:true},
  email:{type:String, required:true, unique:true, select:false},//select:false it doesnt return email and password if we get call by default
  password:{type:String, required:true, select:false},
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);