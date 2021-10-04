const mongodb =  require("mongodb");
const ObjectId = mongodb.ObjectID;
let expense_users;

//export default class UsersDAO {
  exports.injectDB = async (conn) => {
    if (expense_users) {
      return;
    }

    try {
      
      expense_users = await conn
        .db('supplier_marketplace')
        .collection("expense_users");
        //console.log(expense_users)
    } catch (e) {
      console.error(`Unable to establish collection : ${e}`);
    }
  }

  exports.getSupplierByEmail = async (email) => {
  //static async getSupplierByEmail(email) {
    try {
      const supplier_data = await expense_users.findOne({ email: email });
      console.log("supplier_data" + JSON.stringify(supplier_data));
      return supplier_data;
    } catch (e) {
      console.error(`Unable to post expense : ${e}`);
      return { error: e };
    }
  }

  exports.getSupplierById = async (id) => {
  //static async getSupplierById(id) {
    try {
      const supplier_data = await expense_users.findOne({ "_id": ObjectId(id) });
      console.log("supplier_data" + JSON.stringify(supplier_data));
      return supplier_data;
    } catch (e) {
      console.error(`Unable to post expense : ${e}`);
      return { error: e };
    }
  }
//}
