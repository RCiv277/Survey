var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, 
  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  }
);

// shortcut to mongoose.connection object
var db = mongoose.connection;

db.once("connected", function() {
  console.log(`db connected ${db.host} : ${db.port}`);
})