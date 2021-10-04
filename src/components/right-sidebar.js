import React from "react";

function SiderBarPopup() {
  const [show, setShow] = React.useState();
  return (
    <form
      action=""
      method="POST"
      id="my_sidenav"
      className={
        show
          ? "sidebar-nav-open sidenav notfound px-3"
          : "sidebar-nav-close sidenav notfound px-3"
      }
      autoComplete="off"
    >
      <h3>Add Expense Name</h3>
      <div className="form-group">test</div>
      <div className="form-check">test1</div>
      <div className="form-check">test2</div>

      <div className="d-flex justify-content-end my-4">
        <button
          type="button"
          className="btn btn-outline-secondary mr-2 px-3 close-sidebtn"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-secondary ml-1 px-3">
          Save
        </button>
      </div>
    </form>
  );
}

export default SiderBarPopup;
