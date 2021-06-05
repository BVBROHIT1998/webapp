const mongoose = require("mongoose");

// creating a database 
mongoose.connect("mongodb+srv://rohit1998:Rohit@1998@newcluster.6scqh.mongodb.net/dcc?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})