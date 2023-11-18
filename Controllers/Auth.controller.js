import UserModal from "../Modals/User.modal.js"

export const Register =async (req , res)=>{
    try{
        const {name , email , password} = req.body

        const user = new UserModal({
            name,email,password
        })
        if(!name || !email || !password)return res.status(404).json({success:false , message:"incomplete fields"})
    
        await user.save()

        // res.send('hello from register')
        return res.status(200).json({status:true , message : 'registration successful',user})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({status:false , message : 'something went wrong'})
    }
  
}

export const Login = async(req , res)=>{
    try{
        const {email , password} = req.body

        if(!email || !password)return res.status(404).json({success:false , message:"incomplete fields"})

        const checkUser = await UserModal.findOne({email})

        if(checkUser.password == password){
            return res.status(200).json({success:true , message:'login successful'})
        }
        else{
            return res.status(500).json({success:false , message:'incorrect password'})
        }
   
   
    }catch(error){
        console.log(error)
        return res.status(500).json({status:false , message : 'something went wrong'})
    }
   
}