import React from "react";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  console.log(storeItems);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((items) => {
          return <Col><StoreItem {...items}/></Col>;
        })}
      </Row>
    </>
  );
};
