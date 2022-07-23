const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe"(process.env.STRIPE_SECRET_KEY));

exports.processPayment = catchAsyncErrors(async(req,res,next) =>{
    const myPayment = await stripe.paymentItents.create({
        amount:req.body.amount,
        currency:'PKR',
        
    })
})
