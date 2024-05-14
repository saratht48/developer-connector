const mongoose=require('mongoose')

exports.connectDB=()=>{
    mongoose.connect('mongodb+srv://saratht199748:ac5unity@cluster0.8llhqtn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true
    }).then((conn) => {
        //console.log(conn);
        console.log('DB Connection Successful');
    })
}
