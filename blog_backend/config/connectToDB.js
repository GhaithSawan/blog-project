let mongoose = require("mongoose")

module.exports = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://ghaithx1x2x3:XnW6akfYx0OdsgqYEW@cluster0.11picll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("DB Connect");
    } catch (error) {
      console.log(error);  
    }
}