import ProductModal from "../Modals/Product.modal.js"

export const AddProduct = async (req , res)=>{
   try{
    const {name , price , category,image} = req.body

    const addProduct = new ProductModal({
        name , price , category,image
    })

    if(!name || !price || !category)return res.status(404).json({success:false , message:'incomplete details'})

    await addProduct.save()

    return res.status(200).json({success:true , message:"product added " , addProduct})

   }
   catch(error){
    console.log(error)
    return res.status(500).json({success:false , message:'something went wrong'})
   }
}

export const getAllProducts = async (req , res)=>{
    try{
        const products =await ProductModal.find({}).select("name price category")

        return res.status(200).json({success:true , message:"all products", products})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false , message:'something went wrong'})
       }

}