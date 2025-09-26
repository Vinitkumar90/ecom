import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
} 


//route for user login
const loginUser = async (req,res) => {
        try{
            const{email,password} = req.body;

            const user = await userModel.findOne({email});

            if(!user){
                return res.status(401).json({
                    message:"User doesn't exists"
                })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(isMatch){
                const token = createToken(user._id);
                res.json({
                    success: true,
                    token
                })
            }else{
                res.json({success:false, message:"Invalid credentials"})
            }


        }catch(err){
            res.status(400).json({success:false, message:err.message})
        }
    }
    


//route for user register
const registerUser =  async (req,res) => {
        try{
            const{name,email,password} = req.body;

            //check if user already exist
            const exist = await userModel.findOne({email});
            if(exist){
                return res.status(404).json({
                    success:false,
                    message:"User already exist"
                })
            }
            //validating email format and strong password
            if(!validator.isEmail(email)){
                return res.status(404).json({
                    success:false,
                    message:"Please enter a valid email"
                })
            }
            if(password.length < 8){
                return res.status(404).json({
                    success:false,
                    message:"Please enter a strong password"
                })
            }

            //hashing the password before creating the account
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);

            const newUser = new userModel({
                name,
                email,
                password:hashedPassword
            })

            const user = await newUser.save();
            
            //creating a jwt token 
            const token = createToken(user._id);

            res.json({
                success:true,
                token
            })

        }catch(error){
            res.status(500).json({
                message:"error while registering",
                error:error.message
            })
        }
}


//route for admin login
const adminLogin  = async(req,res)=>{
        
}

export {
    loginUser,
    registerUser,
    adminLogin
}