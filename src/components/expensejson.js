import React from "react";
import "../bootstrap.min.css";
import "../index.css";
import SiderBar from "./siderbar";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import SupplierDataService from "./services/supplier";

class ExpenseJSON extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db_array: [],
      data: [],
      columns: [],
      datalen: 0,
      gst_table_data: [],
      invoice_no: "",
      invoice_date: "",
      gst_table_columns: [],
      total_table_columns: [],
      total_data: [],
      active_no: "",
      company: "",
      gst: "",
      user_expenses: [],
      user_expense: [],
    };
  }

  handleSort = (src, type, no, file_src, invoice_id) => {
    this.setState({ iframesrc: file_src });
    this.setState({ filetype: type });
    if (type == 1) {
      this.setState({ loading: 1 });
    }
    SupplierDataService.getExpenseById(invoice_id, '614091828313c469582a82d1')
    //SupplierDataService.getExpenseById(invoice_id, this.props.user_id)
      .then((response) => {
        //console.log(response.data[0]);
        this.setState({ active_no: no });
        this.setState({ user_expense: response.data[0] });
        var invoice_no = this.state.user_expense.invoice_no;
        this.setState({ invoice_no: invoice_no });
        var GST_No = [this.state.user_expense.gstin];
        var company_gst = [this.props.gst];
        let difference = GST_No.filter((x) => !company_gst.includes(x));
        this.setState({ gst: difference[0] });
        var Company_Name = [this.state.user_expense.company];
        var company = [this.props.company];
        let differencec = Company_Name.filter((x) => !company.includes(x));
        //console.log(differencec)
        var Invoice_Date = this.state.user_expense.invoice_date;
        //console.log("Invoice_Date" + Invoice_Date);
        if (Invoice_Date !== "") {
          this.setState({ invoice_date: Invoice_Date });
        }
        this.setState({ company: differencec[0] });
      })
      .catch((e) => {
        console.log(e);
      });

    // fetch(src, {
    //   headers: {
    //     //"Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //.then(function (response) {
    //return response.json();
    //})
    //.then((myJson) => {
    // // let arr = Object.keys(myJson.product_table).map(
    // //   (k) => myJson.product_table[k]
    // // );
    // // let columns = Object.keys(myJson.product_table).map(
    // //   (issue, i) => issue
    // // );
    // var header = Array();
    // var final_array = [];
    // var map_array = [];
    // var db_array = {};
    // var invoice_no = myJson.Invoice_No;
    // var GST_No = myJson.GST_No;
    // var company_gst = [this.props.gst];
    // let difference = GST_No.filter((x) => !company_gst.includes(x));
    // db_array.gstin = difference[0];
    // this.setState({ gst: difference[0] });

    // var Company_Name = myJson.Company_Name;
    // var company = [this.props.company];
    // let differencec = Company_Name.filter((x) => !company.includes(x));
    // //console.log(differencec)
    // this.setState({ company: differencec[0] });

    // let map_json = {
    //   "Sr No": "sr",
    //   "SR. no": "sr",
    //   "SI No.": "sr",
    //   Description: "description",
    //   "Description of Goods": "description",
    //   "HSN/SAC": "hsc",
    //   "GST%": "gst",
    //   "Qty.": "qty",
    //   Quantity: "qty",
    //   Unit: "unit",
    //   per: "unit",
    //   Rate: "rate",
    //   Amount: "amount",
    //   GST_No: "gstin",
    //   Invoice_No: "invoice_no",
    //   Invoice_Date: "invoice_date",
    //   Company_Name: "company_name",
    //   "Disc%": "disc",
    // };

    // let gst_map_json = {
    //   HSN: "hsn",
    //   Taxable_value: "taxable_value",
    //   CGST_Rate: "cgst_rate",
    //   CGST_Amount: "cgst_amount",
    //   SGST_Rate: "sgst_rate",
    //   SGST_Amount: "sgst_amount",
    //   IGST_Rate: "igst_rate",
    //   IGST_Amount: "igst_amount",
    //   GST_Rate: "gst_rate",
    //   GST_Amount: "gst_amount",
    // };

    // let mapped_total_json = {
    //   "Total Taxable Value": "total_taxable",
    //   CGST: "cgst",
    //   SGST: "sgst",
    //   IGST: "igst",
    //   Round_off: "round_off",
    //   GST: "gst",
    //   Discount: "discount",
    //   Grand_total: "total",
    // };

    // this.setState({ active_no: no });
    // if (invoice_no !== undefined && invoice_no[0] !== "undefined") {
    //   this.setState({ invoice_no: invoice_no[0] });
    // }
    // var Invoice_Date = myJson.Invoice_Date;
    // //console.log("Invoice_Date" + Invoice_Date);
    // if (Invoice_Date !== undefined && Invoice_Date[0] !== "undefined") {
    //   this.setState({ invoice_date: Invoice_Date[0] });
    // }
    // var addon = myJson.product_table;

    // for (var z in addon) {
    //   header.push(z);
    //   if (addon[z] !== undefined) {
    //     addon[map_json[z]] = addon[z];
    //     delete addon[z];
    //   }
    // }
    // db_array.product = addon;
    // //db_array.push({product : addon});
    // this.setState({ columns: header });
    // //console.log(addon);
    // for (var z in addon) {
    //   for (var j in addon[z]) {
    //     if (final_array[j] === undefined) {
    //       final_array[j] = [];
    //     }
    //     final_array[j].push(addon[z][j]);
    //   }
    // }
    // //console.log(map_array);
    // this.setState({ datalen: Object.keys(myJson.product_table)[0].length });
    // this.setState({ data: final_array });
    // //this.setState({ gst_table_columns: myJson.gst_table });

    // // let arr = Object.keys(myJson.product_table).map(
    // //   (k) => myJson.product_table[k]
    // // );
    // // let columns = Object.keys(myJson.product_table).map(
    // //   (issue, i) => issue
    // // );
    // var header = Array();
    // var final_array = [];
    // var addon = myJson.gst_table;
    // for (var z in addon) {
    //   header.push(z);
    //   if (addon[z] !== undefined) {
    //     addon[gst_map_json[z]] = addon[z];
    //     delete addon[z];
    //   }
    // }
    // //console.log(addon);
    // db_array.gst = addon;
    // //db_array.push({gst : addon});
    // this.setState({ gst_table_columns: header });
    // for (var z in addon) {
    //   //header.push(z);
    //   for (var j in addon[z]) {
    //     if (final_array[j] === undefined) {
    //       final_array[j] = [];
    //     }
    //     final_array[j].push(addon[z][j]);
    //   }
    // }
    // this.setState({ gst_table_data: final_array });
    // var final_array = [];
    // var header = Array();
    // var addon = myJson.total_table;
    // final_array = myJson.total_table;
    // for (var z in addon) {
    //   header.push(z);
    //   if (addon[z] !== undefined) {
    //     addon[mapped_total_json[z]] = addon[z];
    //     delete addon[z];
    //   }
    // }
    // //console.log(addon);
    // this.setState({ total_table_columns: header });
    // db_array.total = addon;

    // // for (var z in addon) {
    // //   //header.push(z);
    // //   for (var j in addon[z]) {
    // //     if (final_array[j] === undefined) {
    // //       final_array[j] = [];
    // //     }
    // //     final_array[j].push(addon[z][j]);
    // //   }
    // // }
    // this.setState({ total_data: final_array });
    // db_array.company = differencec[0];
    // db_array.invoice_no = invoice_no[0];
    // db_array.invoice_date = Invoice_Date[0];
    // db_array.user_id = this.props.user_id;
    // db_array.user_gstn = this.props.gst;
    // this.setState({ db_array: db_array });
    //});
  };

  saveExpense = () => {
    //const newItem = Object.assign({}, data2, { expense: data });
    //console.log("extrainputList" + JSON.stringify(newItem));
    //if (data2.name !== "") {
    SupplierDataService.createReview(this.state.db_array)
      .then((response) => {
        console.log("wwwwwwwwwwww" + JSON.stringify(response));
      })
      .catch((e) => {
        console.log("eewwwwwwwww" + e);
        NotificationManager.error("Problem in saving records.");
      });
  };

  componentDidMount() {
    this.getTutorial(this.props.user_id);
  }

  getTutorial = (user_id) => {
user_id = '614091828313c469582a82d1';
    SupplierDataService.getExpense(user_id)
      .then((response) => {
        console.log(response.data[0]);
        this.setState({ user_expenses: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="main">
        <SiderBar />
        <div className="container-fluid">
          {/* <div className="row border-bottom mb-3">
          <div className="col-12 ">
            <h1 className="page-title my-3">Chitragupta</h1>
          </div>
        </div> */}
          {/* <HeaderExpense /> */}
          <NotificationContainer />
          <div className="row mt-3">
            <div className="col-md-2">
              <ul className="side-listing">
                {/* <div className="row mx-0 brif-header">
                  <h2 className="brif-title w-100">Briefcase</h2>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <span className="order-1">
                        Total : <strong> 15 </strong>
                      </span>
                      <span className="order-2">
                        Unread Supplier : <strong> 5 </strong>{" "}
                      </span>
                    </div>
                  </div>
                </div> */}
                {/* {JSON.stringify(this.state.user_expenses)} */}
                {this.state.user_expenses.map((x, i) => {
                  return (
                    <li
                      className={this.state.active_no == i ? "active" : ""}
                      key={i}
                    >
                      <figure className="mb-0">
                        <img
                          src={x.image_path}
                          alt={x.image_path}
                          className="img-fluid"
                          onClick={() =>
                            this.handleSort(
                              x.file_path,
                              2,
                              i,
                              x.image_path,
                              x._id
                            )
                          }
                        />
                        <figcaption className="mt-2">{x.image_path}</figcaption>
                      </figure>
                    </li>
                  );
                })}

                {/* <li className={this.state.active_no == 2 ? "active" : ""}>
                  <figure className="mb-0">
                    <img
                      src="http://52.76.48.26:4524/img/2.jpg"
                      alt="Trulli"
                      className="img-fluid"
                      onClick={() =>
                        this.handleSort(
                          "http://52.76.48.26:4524/img/data2.json",
                          2,
                          2,
                          "http://52.76.48.26:4524/img/2.jpg"
                        )
                      }
                    />
                    <figcaption className="mt-2">2</figcaption>
                  </figure>
                </li>
                <li className={this.state.active_no == 3 ? "active" : ""}>
                  <figure className="mb-0">
                    <img
                      src="http://52.76.48.26:4524/img/3.jpg"
                      alt="Trulli"
                      className="img-fluid"
                      onClick={() =>
                        this.handleSort(
                          "http://52.76.48.26:4524/img/data3.json",
                          2,
                          3,
                          "http://52.76.48.26:4524/img/3.jpg"
                        )
                      }
                    />
                    <figcaption className="mt-2">3</figcaption>
                  </figure>
                </li> */}
              </ul>
            </div>
            <div className="col-md-6 middlecont px-0 mr-3">
              <div className="row justify-content-between align-items-center heade-wrap">
                <div className="col-sm-6 px-2">
                  <h3 className="file-name mb-1">
                    Invoice No : {this.state.invoice_no}
                  </h3>
                </div>
                <div className="col-sm-6 px-2">
                  <h5 className="date mb-1">
                    Date : {this.state.invoice_date}
                  </h5>
                </div>
                <div className="col-sm-6 px-2">
                  <h5 className="suppli-name mb-0 pt-1 pb-2">
                    Company : {this.state.company}
                  </h5>
                </div>
                <div className="col-sm-6 px-2">
                  <h5 className="suppli-name mb-0 pt-1 pb-2">
                    GST : {this.state.gst}
                  </h5>
                  {/* <input
                    type="button"
                    id="configsubmit"
                    className="app-form-button btn btn-secondary ml-2"
                    value="Submit"
                    onClick={this.saveExpense}
                  /> */}
                </div>
              </div>
              <form className="">
                <div className="row">
                  {this.state.user_expense.product !== undefined && (
                    <div className="col-md-9">
                      <h4>Products</h4>
                      <table className="table table-striped table-divided border-0 p-0 mb-0">
                        <thead>
                          <tr key={"header"}>
                            {this.state.user_expense.product_header.map(
                              (key) => (
                                <th>{key.replace("_", " ")}</th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.user_expense.product.map((item) => (
                            <tr key={item.id}>
                              {Object.values(item).map((val) => (
                                <td>{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {this.state.user_expense.gst !== undefined &&
                    this.state.user_expense.gst.length > 0 && (
                      <div className="col-md-9">
                        <h4>GST</h4>
                        <table className="table table-striped table-divided border-0 p-0 mb-0">
                          <thead>
                            <tr key={"header"}>
                              {this.state.user_expense.gst_header.map((key) => (
                                <th>{key.replace("_", " ")}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.user_expense.gst.map((item) => (
                              <tr key={item.id}>
                                {Object.values(item).map((val) => (
                                  <td>{val}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                  {this.state.user_expense.total !== undefined && (
                    <div className="col-md-9">
                      <h4>Total</h4>
                      <table className="table table-striped table-divided border-0 p-0 mb-0">
                        <tbody>
                          {Object.keys(this.state.user_expense.total).map(
                            (item, i) => (
                              <tr key={Math.random()}>
                                <td>
                                  {this.state.user_expense.total_header[
                                    i
                                  ].replace("_", " ")}
                                </td>
                                <td>{this.state.user_expense.total[item]}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* {Object.keys(this.state.gst_table_data).length > 0 && (
                    <div className="col-md-9">
                      <h4>GST</h4>
                      <table className="table table-striped table-divided border-0 p-0 mb-0">
                        <thead>
                          <tr>
                            {this.state.gst_table_columns.map((issue, i) => (
                              <th key={Math.random()}>
                                {issue.replace("_", " ")}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.gst_table_data.map((item) => (
                            <tr key={Math.random()}>
                              {item.map((val) => (
                                <td key={Math.random()}>{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                   )}
                  {Object.keys(this.state.total_data).length > 0 && (
                    <div className="col-md-9">
                      <h4>Total</h4>
                      <table className="table table-striped table-divided border-0 p-0 mb-0">
                        <tbody>
                          {Object.keys(this.state.total_data).map((item, i) => (
                            <tr key={Math.random()}>
                              <td>
                                {this.state.total_table_columns[i].replace(
                                  "_",
                                  " "
                                )}
                              </td>
                              <td>{this.state.total_data[item]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                   )} */}
                </div>
              </form>
            </div>
            <div className="col-md-4 documentsection px-0">
              <h2 className="img-preview-wrap mb-0">Image preview</h2>
              <div className="document--wrap">
                <div id="iframe_container">
                  {this.state.iframesrc && this.state.filetype == "1" && (
                    <iframe
                      src={`${this.state.iframesrc}#view=fitH`}
                      title="testPdf"
                      id="myiframe"
                      onLoad={this.state.hideSpinner}
                      width="100%"
                      height="600px"
                      //style={{transform: `scale(${scale})`, 'width': `${something}px`, 'height': `500px`}}
                    />
                    // <iframe
                    //   className=""
                    //   width="100%"
                    //   height="600"
                    //   frameBorder="0"
                    //   onLoad={hideSpinner}
                    //   src={`https://docs.google.com/gview?url=${iframesrc}&embedded=true`}
                    // ></iframe>
                  )}
                  {this.state.iframesrc && this.state.filetype == "2" && (
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: `${this.state.iframesrc}`,
                        },
                        largeImage: {
                          src: `${this.state.iframesrc}`,
                          width: 1200,
                          height: 1800,
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                      }}
                    />
                  )}
                  {this.state.loading ? <h3>Loading</h3> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state");
  console.log(state);
  if (state.auth.loggedIn && state.auth.user) {
    let userData = JSON.parse(state.auth.user);
    return {
      name: userData.response.name,
      email: userData.response.email,
      user_id: userData.response._id,
      loggedIn: state.auth.loggedIn,
      gst: userData.response.gst,
      company: userData.response.company,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, null)(ExpenseJSON);
