const mongodb =  require("mongodb");
const ObjectId = mongodb.ObjectID;
let expenses;

//export default class ExpenseDao {
  exports.injectDB = async (conn) => {
  //static async injectDB(conn) {
    if (expenses) {
      return;
    }

    try {
        expenses = await conn
        .db('supplier_marketplace')
        .collection("expenses");
    } catch (e) {
      console.error(`Unable to establish collection : ${e}`);
    }
  }

  exports.addExpense = async (data) => {
  //static async addExpense(data) {
    data.user_id = ObjectId(data.user_id);
    let product = [];
    let gst = [];
    for (const property in data.product) {
      product[property] = data.product[property]
    }
    for (const property in data.gst) {
      gst[property] = data.gst[property]
    }
    //data.product = product;
    //data.gst = gst;
    console.log(data)
    //return false;
    try {
        return await expenses.insertOne(data);
    } catch (e) {
      console.error(`Unable to post expense : ${e}`);
      return { error: e };
    }
  }

  exports.getUserExpense = async (id) => {
  //static async getUserExpense(id) {
    let expenses_data = []
    try {
      console.log(id);
        const expenses_data = await expenses.find({user_id : ObjectId(id)},{
          projection:{ _id: 1, file_path : 1, image_path : 1 }}).toArray();
        return expenses_data;
    } catch (e) {
      console.error(`Unable to get expenses, ${e}`)
      return expenses_data
    }
}

exports.getUserExpenseById = async (expense_id,user_id) => {
//static async getUserExpenseById(expense_id,user_id) {
  let expenses_data = []
  try {
      const expenses_data = await expenses.find({_id : ObjectId(expense_id),user_id : ObjectId(user_id)}).toArray();
      return expenses_data;
  } catch (e) {
    console.error(`Unable to get expenses, ${e}`)
    return expenses_data
  }
}

//}
