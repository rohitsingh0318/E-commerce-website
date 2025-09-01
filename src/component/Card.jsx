import React, { useState } from "react";
import qrcode from "../assets/qr-code.jpg";

const Card = ({ cart, deleteCart, updateQuantity }) => {
  const [showImage, setShowImage] = useState(false); // image state

  const total = cart.reduce(
    (total, item) => item.price * item.quantity + total,
    0
  );

  return (
    <div className="container my-3 w-75 p-3 border-2 border-primary border">
      {cart.map((item) => (
        <div key={item.id} className="row my-3">
          <div className="col-md-8 d-flex">
            <img
              src={`/E-commerce-website/${item.image}`}
              className="img-fluid object-fit-cover"
              style={{ height: "120px", width: "100px" }}
              alt=""
            />
            <div className="ms-3">
              <h4>{item.title}</h4>
              <p>&#8377; {item.price}</p>
            </div>
          </div>

          <div className="col offset-7">
            <div className="quentity-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="btn btn-sm btn-success"
              >
                +
              </button>
              <h4 className="text-center text-bold fs-4">{item.quantity}</h4>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="btn btn-sm btn-warning"
              >
                -
              </button>
              <button
                onClick={() => deleteCart(item.id)}
                className="btn btn-sm btn-danger"
              >
                Del
              </button>
            </div>
          </div>
        </div>
      ))}

      {cart.length === 0 ? (
        <h1 className="text-center">The Cart is Empty</h1>
      ) : (
        <div className="summary my-2">
          <h4 className="my-4">
            Total Price : <small className="fw-normal">&#8377; {total}</small>
          </h4>
          <button
            className="btn btn-success text-center w-100"
            onClick={() => setShowImage(true)} // click par image dikhegi
          >
            Confirm Payment 👉
          </button>

          {/* Agar showImage true hai toh image render hogi */}
          {showImage && (
            <div className="text-center my-3">
              <img
                src={qrcode}
                alt="Make payment using this card code"
                className="img-fluid"
                style={{ maxWidth: "300px" }}
              />
              <h5 className="mt-2 text-success">Make Payment using this QR Code 🥰 </h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
