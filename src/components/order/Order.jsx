import React from "react";
import "./order.css";
import truck from "../../images/truck.png";
import leave from "../../images/leave.png";
import hand from "../../images/hand.png";

const Order = () => {
  return (
    <div className="o">
      <div className="o-text">
        <h2 className="o-text-heading">Why choose Freshliii?</h2>
        <p className="o-text-desc">
          A wide range of fresh products right at your doorstep everyday at 7am.
          No more ‘Q’ lines, no more of carrying heavy bags and no more tiresome
          grocery shopping. Just fresh and wholesome food in your home every
          morning.
        </p>
      </div>
      <div className="o-process-flow">
        <div className="o-process-flow-order">
          <img src={hand} alt="hand" className="o-process-flow-image" />
          <p className="o-process-flow-header">Easy Ordering</p>
          <p className="o-process-flow-desc">Think, click and pick.</p>
        </div>
        <div className="o-process-flow-prepare">
          <img src={leave} alt="leave" className="o-process-flow-image" />
          <p className="o-process-flow-header">100% Fresh</p>
          <p className="o-process-flow-desc">Freshness delivered on time.</p>
        </div>
        <div className="o-process-flow-deliver">
          <img src={truck} alt="truck" className="o-process-flow-image" />
          <p className="o-process-flow-header">Live Order</p>
          <p className="o-process-flow-desc">
            Delivering foods timely and hastlefree at your doorstep everyday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
