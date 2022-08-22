let mongoose = require('mongoose')
let url = 'mongodb+srv://Subhrajeet26677:ts7m7.mf3kLzcVF@cluster0.fmfoth3.mongodb.net/?retryWrites=true&w=majority'

let dbconnect = () => {
    return mongoose.connect(url).then((res) => {
        console.log("\n mongodb is connected")
    }).catch(err => { console.log('error in config' + err) });

}
//bla bla

module.exports = { dbconnect };

//klfjlksdfkljsdfdf



