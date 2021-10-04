const app =  require("./server.js");
const mongodb =  require("mongodb");
const dotenv =  require("dotenv");
const UsersDAO =  require("./dao/UsersDAO.js");
const ExpenseDao =  require("./dao/ExpenseDao.js");
dotenv.config();
const MongoClient = mongodb.MongoClient;
const port = 4567;
MongoClient.connect(
"mongodb://127.0.0.1:27017",
{
//poolSize : 50 ,;
//wtimeout : 2500 ,;
//useNewURLParse : true,;
useUnifiedTopology: true
}
).catch(
err => {
console.log(err.stack);
process.exit(1);
}
).then(
async client => {;
await UsersDAO.injectDB(client);
await ExpenseDao.injectDB(client);
app.listen(port , () => {;
console.log("listening to port");
})
}
)

