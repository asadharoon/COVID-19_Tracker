import { Card, Col } from "antd";
import React from "react";
import "./cards.css";
const CardComponent = ({ children, loading, borderColor }) => {
  return (
    <Col sm={24} lg={7} xs={24} md={7} style={{ padding: 5 }}>
      <Card
        loading={loading}
        bodyStyle={{ height: 210 }}
        className="card"
        style={{
          borderRadius: 6,
          borderBottomColor: borderColor,
          borderBottomWidth: 10,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Card>
    </Col>
  );
};
export default CardComponent;
