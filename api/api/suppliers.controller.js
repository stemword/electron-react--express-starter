const UsersDAO = require("../dao/UsersDAO.js");
const OAuth2Client = require("google-auth-library").OAuth2Client;

const client = new OAuth2Client(
  "434425175220-0371a9ld8e3e4cbi0jjdeglkqof87f03.apps.googleusercontent.com"
);

//export default class SuppliersController {
  exports.apiPostGoogleLogin  = async  (req, res, next) => {
    try {
      //console.log(req.body);
      const { tokenId } = req.body;
      client
        .verifyIdToken({
          idToken: tokenId,
          audience:
            "434425175220-0371a9ld8e3e4cbi0jjdeglkqof87f03.apps.googleusercontent.com",
        })
        .then(async (response) => {
          const { email_verified, name, email } = response.payload;
          if (email_verified) {
            console.log("email" + email);
            let supplier = await UsersDAO.getSupplierByEmail(email);
            console.log(JSON.stringify(supplier));
            //console.log("lengthlength"+Object.keys(supplier).length);
            if (!supplier) {
              res.json({ status: "error", response: "" });
            } else {
              res.json({ status: "success", response: supplier });
            }
          } else {
            res.json({ status: "email is not verified" });
          }
        });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  
//}
