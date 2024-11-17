const mongoose=require("mongoose")
const paymentSchema=mongoose.Schema({
    bookingSlotId:{
        type:mongoose.Types.ObjectId,
        ref:"Booking"
    },
    type:{
        type:String,
        enum:["Guest","User"]
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    guestId:{
        type:mongoose.Types.ObjectId,
        ref:"Guest"
    },
    razarPayObjectStringfy: String,
    amount: String,
    currency: {
        type: String,
        default: "INR"
    },
    receipt: String,
    payment_id: String,
    razorpay_payment_id_res: String,
    razorpay_order_id_res: String,
    razorpay_signature_res: String,
},{
    timestamps:true
})
const paymentModel=mongoose.model("Payment",paymentSchema)
module.exports=paymentModel