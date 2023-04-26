import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Order = () => {
  return (
    <div className="order-container">
      <p>
        <ExclamationCircleOutlined
          style={{ marginLeft: "15px", fontSize: "20px" }}
        />
        هیچ سفارشی هنوز ثبت نشده است.{" "}
      </p>
    </div>
  );
};

export default Order;
