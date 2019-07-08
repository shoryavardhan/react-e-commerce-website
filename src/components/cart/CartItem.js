import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      {/* // col no. 1 */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      {/* // col no. 2 */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      {/* // col no. 3 */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : $</span>
        {price}
      </div>
      {/* // col no. 4 */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
        </div>
        {/* // col no. 5 */}
        <div className="col-10 mx-auto col-lg-2">
          <div
            className="cart-icon"
            onClick={() => {
              removeItem(id);
            }}
          >
            <i className="fas fa-trash" />
          </div>
        </div>
        {/* // col no. 6 */}
        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: ₹ </strong>
          {total}
        </div>
      </div>
    
  );
}
