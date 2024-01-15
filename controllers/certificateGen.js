const ejs=require("ejs");
exports.certificateGen=async(req, res)=>{
    ejs.render('index',{
        name:"your name",
        email:"your email",
        mobile_number:"6284092417",
        amount:"1000",
        number_of_trees:"10"
    })
}