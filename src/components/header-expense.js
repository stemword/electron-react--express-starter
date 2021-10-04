import React from "react";

function HeaderExpense() {
  return (
    <div className="row justify-content-between align-items-center top-card-sect">
      <div className="col-xl-2 col-lg-3 col">
        <div className="d-flex justify-content-between px-3 py-2">
          <div className="order-1">
            <h4>Total Revenue</h4>
            <p className="mb-0">
              <span>Rs.</span> 99,20,0000
            </p>
          </div>
          <div className="order-2">
            <figure>
              <img src="circle-img.png" />
            </figure>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-3 col">
        <div className="d-flex justify-content-between px-3 py-2">
          <div className="order-1">
            <h4>Office expense</h4>
            <p className="mb-0">
              <span>Rs.</span> 10,20,0000
            </p>
          </div>
          <div className="order-2">
            <figure>
              <img src="circle-img.png" />
            </figure>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-3 col">
        <div className="d-flex justify-content-between px-3 py-2">
          <div className="order-1">
            <h4>Travel expense</h4>
            <p className="mb-0">
              <span>Rs.</span> 20,0000
            </p>
          </div>
          <div className="order-2">
            <figure>
              <img src="circle-img.png" />
            </figure>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-3 col">
        <div className="d-flex justify-content-between px-3 py-2">
          <div className="order-1">
            <h4>Total expense</h4>
            <p className="mb-0">
              <span>Rs.</span> 20,0000
            </p>
          </div>
          <div className="order-2">
            <figure>
              <img src="circle-img.png" />
            </figure>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-3 col">
        <div className="d-flex justify-content-between px-3 py-2">
          <div className="order-1">
            <h4>Total expense</h4>
            <p className="mb-0">
              <span>Rs.</span> 20,0000
            </p>
          </div>
          <div className="order-2">
            <figure>
              <img src="circle-img.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderExpense;
