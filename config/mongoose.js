const mongoose = require('mongoose');
// mongoose.set('strictQuery',true);
// const dotenv = require('.env');
const DB = 'mongodb+srv://pawarsubham438:6aO4JOECgoI7Xu71@cluster0.bemtdzm.mongodb.net/mernstack?retryWrites=true&w=majority';
// dotenv.config({ path: 'config/.env' });

//connecting mongoose with database
//I stored MONGODB_URI in my system veriable for security reason. veriable name MONGODB_URI followed by your mongo atlas link
//for local use you can write this code
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');

// mongoose.connect(DB, {
// 	useNewUrlParser: true,
// 	useCreateIndex:true,
//  	useUnifiedTopology: true,
// 	useFindAndModify:false
// }).then(() => {
// 	console.log('connection successful');
// }).catch((err) => console.log('no connection',err));


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
