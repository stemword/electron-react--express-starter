import http from "./http-common";
const headers = {
  "Content-Type": "application/json"
};
class SupplierDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  getExpenseById(expense_id, user_id) {
    return http.get(`/id/${expense_id}/${user_id}`);
  }

  getExpense(id) {
    return http.get(`/expense_id/${id}`);
  }

  find(query, by = "name", page = 0) {
    console.log(2121121)
    return http.get(`?${by}=${query}&page=${page}`,{headers});
  } 
  // find(query, by = "name", page = 0) {
  //   return http.get(`?${by}=${query}&page=${page}`);
  // } 

  createReview(data) {
    console.log("dadaaa"+ JSON.stringify(data))
    return http.post("/expense", data);
  }

  updateReview(data) {
    return http.put("/expense", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/expense?id=${id}`, {data:{user_id: userId}});
  }

  getExpenses(id) {
    return http.get(`/expenses`);
  }

  getExpensesByName(query, by = "name", page = 0) {
    return http.get(`/expensebyname?${by}=${query}&page=${page}`);
  }

  createParty(data) {
    console.log("party data"+ data)
    return http.post("/party", data);
  }

  createExpense(data) {
    console.log("expense name data"+ data)
    return http.post("/expensename", data);
  }

  googlelogin(data) {
    console.log("google login data"+ data)
    return http.post("/googlelogin", data);
  }

}

export default new SupplierDataService();
