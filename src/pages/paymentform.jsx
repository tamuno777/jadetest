import React, { useState } from "react";
import { useContext } from "react";
import { Storecontext } from "../context/Store-context";
import "../views/desktop.css"

export default function PaymentForm() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(Storecontext);
  const totalAmount = getTotalCartAmount();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    narration: "",
    amount: totalAmount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const doFairSurePay = () => {
    const { firstName, lastName, email, phone, narration, amount } = formData;

    const handler = FairsurePay.setup({
      key: "LIVE_EJXVHJWNXSPYNW4XBFR2", //this is a demo key.
      email,
      amount,
      currency: "NGN", // currency
      first_name: firstName,
      last_name: lastName,
      phone_number: phone, // customer’s phone number (optional)
      customerId: email,
      ref: `${Math.floor(Math.random() * 1000000000) + 1}`, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      narration,
      callback_url: "https://my-site.com.go", // specified redirect URL (optional)
      meta: {
        // optional parameters
        consumer_id: "data.customer_id",
        item_ref: "payment.res",
      },
    });

    handler.openIframe(); // Ensure to call openIframe to show the payment form
  };

  return (
    <div style={{display:"flex",justifyContent:"center", height:"100dvh",width:"100%",alignItems:"center"}} className="text-center p-2 mt-5">
      <form id="payment-form" >
        <h1 className="my-1 py-3">PAY WITH FAIRSURE PAYMENT</h1>
       <div className="" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
       <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="Enter First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Enter Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="narration"
          placeholder="Enter Narration"
          name="narration"
          value={formData.narration}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          className="form-control"
          id="amount"
          placeholder="Enter Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        /> */}
        <p  name="amount"
          value={formData.amount}  className="form-control"
          id="amount">N {totalAmount}</p>
        <input
          type="button"
          value="Submit"
          className="button"
          onClick={doFairSurePay}
        />
       </div>
      </form>
    </div>
  );
}
