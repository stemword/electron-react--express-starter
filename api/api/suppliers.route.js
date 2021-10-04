const express = require("express");
const SuppliersCtrl = require("./suppliers.controller.js");
const ExpensesCtrl = require("./expenses.controller.js");

const router = express.Router();

router.route("/googlelogin").post(SuppliersCtrl.apiPostGoogleLogin);
router.route("/expense").post(ExpensesCtrl.apiPostExpense);
router.route("/autoexpense").post(ExpensesCtrl.apiPostExpenseJSON);
router.route("/expense_id/:id").get(ExpensesCtrl.apiGetUserExpense);
router.route("/id/:expense_id/:user_id").get(ExpensesCtrl.apiGetUserExpenseById);
console.log("hee")


module.exports = router;