const ExpenseDao = require("../dao/ExpenseDao.js");
const UsersDAO = require("../dao/UsersDAO.js");
const OAuth2Client = require("google-auth-library").OAuth2Client;
const request = require("request");

const client = new OAuth2Client(
  "434425175220-0371a9ld8e3e4cbi0jjdeglkqof87f03.apps.googleusercontent.com"
);

//export default class ExpensesController {
  exports.apiPostExpense  = async  (req, res, next) => {
  //static async apiPostExpense(req, res, next) {
    let expenseDocObj = req.body;
    let m = new Date();
    let dateString =
      m.getUTCFullYear() +
      "-" +
      (m.getUTCMonth() + 1) +
      "-" +
      m.getUTCDate() +
      " " +
      m.getUTCHours() +
      ":" +
      m.getUTCMinutes() +
      ":" +
      m.getUTCSeconds();
    expenseDocObj.created = new Date(dateString);
    const expenseResponse = await ExpenseDao.addExpense(expenseDocObj);
  }
  
  exports.apiPostExpenseJSON  = async  (req, res, next) => {
  //static async apiPostExpenseJSON(req, res, next) {
    let file_path = req.body.file_path;
    let user_id = req.body.user_id;

    const user_data = await UsersDAO.getSupplierById(user_id);
    //console.log(user_data);
    //return false;
    if (!user_data.error) {
      //res.json({ status: "error", response: "" });
      //return false;
    } else {
      res.json({ status: "error", response: "" });
      return false;
    }
    //let expenseDocObj = {};

    let m = new Date();
    let dateString =
      m.getUTCFullYear() +
      "-" +
      (m.getUTCMonth() + 1) +
      "-" +
      m.getUTCDate() +
      " " +
      m.getUTCHours() +
      ":" +
      m.getUTCMinutes() +
      ":" +
      m.getUTCSeconds();
    //expenseDocObj.created = new Date(dateString);
    let file_json = await this.doRequest(file_path);
    if (file_json == undefined) {
      // console.log(212);
      return false;
    }
    // console.log(file_json);

    //console.log(oNew);
    var header = Array();
    var final_array = [];
    var map_array = [];
    var db_array = {};
    var invoice_no = file_json.Invoice_No;
    var GST_No = file_json.GST_No;
    var company_gst = user_data.gst;
    let difference = GST_No.filter((x) => !company_gst.includes(x));
    db_array.gstin = difference[0];
    var Company_Name = file_json.Company_Name;
    var company = user_data.company;
    let differencec = Company_Name.filter((x) => !company.includes(x));
    db_array.company = differencec[0];

    let map_json = {
      "Sr No": "sr",
      "SR. no": "sr",
      "SI No.": "sr",
      Description: "description",
      "Description of Goods": "description",
      "HSN/SAC": "hsc",
      "GST%": "gst",
      "Qty.": "qty",
      Quantity: "qty",
      Unit: "unit",
      per: "unit",
      Rate: "rate",
      Amount: "amount",
      GST_No: "gstin",
      Invoice_No: "invoice_no",
      Invoice_Date: "invoice_date",
      Company_Name: "company_name",
      "Disc%": "discount",
    };

    let gst_map_json = {
      HSN: "hsn",
      Taxable_value: "taxable_value",
      CGST_Rate: "cgst_rate",
      CGST_Amount: "cgst_amount",
      SGST_Rate: "sgst_rate",
      SGST_Amount: "sgst_amount",
      IGST_Rate: "igst_rate",
      IGST_Amount: "igst_amount",
      GST_Rate: "gst_rate",
      GST_Amount: "gst_amount",
    };

    let mapped_total_json = {
      "Total Taxable Value": "total_taxable",
      CGST: "cgst",
      SGST: "sgst",
      IGST: "igst",
      Round_off: "round_off",
      GST: "gst",
      Discount: "discount",
      Grand_total: "total",
    };

    if (invoice_no !== undefined && invoice_no[0] !== "undefined") {
    }
    var Invoice_Date = file_json.Invoice_Date;
    if (Invoice_Date !== undefined && Invoice_Date[0] !== "undefined") {
    }
    var addon = {};
    var header_json = {};
    var i = 0;
    var product_header = [];
    //console.log(file_json.product_table)
    var firstKeyValue =
      file_json.product_table[Object.keys(file_json.product_table)[0]]; //"Steve"
    //let product_length  = Object.keys(file_json.product_table).length;
    //console.log(firstKeyValue);
    let product_length = Object.keys(firstKeyValue).length;
    //console.log(product_length);

    for (var z in file_json.product_table) {
      if (Object.keys(file_json.product_table[z]).length > 0) {
        product_header.push(z);
      }

      if (map_json[z] !== undefined) {
        header_json[map_json[z]] = "";
        addon[map_json[z]] = file_json.product_table[z];
        delete file_json.product_table[z];
      } else {
        header_json[z] = "";
        console.log("ewewewwwe");
      }
      i++;
    }

    //console.log( Object.entries(addon));
    //return false;
    let oNew = [];
     oNew = Array.from(
      { length: 6 },
      () => (header_json)
    );
    //console.log(oNew);
    //return false;
    for (let [key, value] of Object.entries(addon)) {
      //oNew.push(header_json)
      for (let [k, v] of Object.entries(value)) {
        //oNew.push(header_json)
        if (!oNew[+k]) {
          //console.log(2222 + ' '+k);
          oNew.push({});
          //oNew.push(header_json);
        }
        //console.log(v)
        oNew[+k][key] = v;
        console.log(oNew)
      }
      
    }
    db_array.product = oNew;
    db_array.product_header = product_header;
    //console.log(db_array)
    return false;

    var gst_header = Array();
    var final_array = [];
    var addon = {};
    var header_json = {};

    var gstfirstKeyValue =
      file_json.gst_table[Object.keys(file_json.gst_table)[0]]; //"Steve"
    //let product_length  = Object.keys(file_json.product_table).length;
    console.log(gstfirstKeyValue);
    //return false;
    let gst_length = Object.keys(gstfirstKeyValue).length;

    for (var z in file_json.gst_table) {
      if (Object.keys(file_json.gst_table[z]).length > 0) {
        gst_header.push(z);
      }
      if (gst_map_json[z] !== undefined) {
        header_json[gst_map_json[z]] = "";
        addon[gst_map_json[z]] = file_json.gst_table[z];
        delete file_json.gst_table[z];
      } else {
        addon[z] = file_json.gst_table[z];
        console.log("ewewewwwe");
      }
    }
    //console.log(addon);

    oNew = [];
    //  oNew = Array.from(
    //   { length: gst_length },
    //   () => (header_json)
    // );
    for (let [key, value] of Object.entries(addon)) {
      //oNew.push(header_json)
      for (let [k, v] of Object.entries(value)) {
        if (!oNew[+k]) {
          oNew.push({});
        }
        //console.log(key)
        oNew[+k][key] = v;
      }
    }

    db_array.gst = oNew;
    db_array.gst_header = gst_header;
    console.log(db_array);
    //return false;
    // for (var z in addon) {
    //   // console.log("hrereeer z" + z);
    //   // console.log(addon[z]);
    //   if(z == 'igst_amount') {
    //     final_array[0] = []
    //     final_array[0].push('');
    //   }
    //   for (var j in addon[z]) {
    //     if (final_array[j] === undefined) {
    //       final_array[j] = [];
    //     }
    //     final_array[j].push(addon[z][j]);
    //   }
    // }

    //return false;
    var final_array = [];
    var total_header = Array();
    var addon = file_json.total_table;
    final_array = file_json.total_table;
    for (var z in addon) {
      total_header.push(z);
      //console.log(mapped_total_json[z]);
      if (mapped_total_json[z] !== undefined) {
        let result = addon[z].map((i) => Number(i.split(",").join("")));
        let sum = result.reduce((a, b) => a + b, 0);
        addon[mapped_total_json[z]] = sum;
        delete addon[z];
      } else {
        console.log("ewewewwwe");
      }
    }

    db_array.total = addon;
    db_array.total_header = total_header;
    db_array.invoice_no = invoice_no[0];
    db_array.invoice_date = Invoice_Date[0];
    db_array.user_id = req.body.user_id;
    db_array.user_gstn = user_data.gst;
    db_array.created = new Date(dateString);
    db_array.file_path = req.body.file_path;
    db_array.image_path = req.body.image_path;
    //console.log(db_array);
    const expenseResponse = await ExpenseDao.addExpense(db_array);
    if (!expenseResponse.error) {
      res.json({ status: "success", response: "" });
      return false;
    } else {
      res.json({ status: "error", response: "" });
      return false;
    }
  }
  
  exports.doRequest  = async  (url) => {
  //static doRequest(url) {
    return new Promise(function (resolve, reject) {
      request(url, function (error, res, body) {
        if (!error && res.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          //return { error: 'error' };
          reject(new Error("not OK"));
          //return { error: 'error' };
        }
      });
    }).catch((error) => {});
  }

  exports.apiGetUserExpense  = async  (req, res, next) => {
    console.log("hee22")
  //static async apiGetUserExpense(req, res, next) {
    try {
      let id = req.params.id || {};
      let expenses = await ExpenseDao.getUserExpense(id);
      if (!expenses) {
        res.status(400).json({ error: "Not found" });
        return;
      }
      res.json(expenses);
    } catch (e) {
      console.log(`api ,${e}`);
      res.status(500).json({ error: e });
    }
  }

  exports.apiGetUserExpenseById  = async  (req, res, next) => {
  //static async apiGetUserExpenseById(req, res, next) {
    try {
      let expense_id = req.params.expense_id || {};
      let user_id = req.params.user_id || {};
      let expenses = await ExpenseDao.getUserExpenseById(expense_id, user_id);
      if (!expenses) {
        res.status(400).json({ error: "Not found" });
        return;
      }
      res.json(expenses);
    } catch (e) {
      console.log(`api ,${e}`);
      res.status(500).json({ error: e });
    }
  }
//}
