const mongoose = require("mongoose");

const db = 'mongodb+srv://23pa1a4216:23PA1A421652@cluster1.kmud3jv.mongodb.net/smartinternz?retryWrites=true&w=majority&appName=Cluster1';

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`✅ Connection successful`);
}).catch((e) => {
  console.log(`❌ No connection: ${e}`);
});
