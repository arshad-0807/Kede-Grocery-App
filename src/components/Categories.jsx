import React from "react";
import "../ModuleCss/Categories.css";
import HeaderSec from "./HeaderSec";

const Categories = () => {
  return (
    <>
      <HeaderSec title="Categories" />
      <section className="section_gap mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="manu_sec">
                <div className="manu_item">
                  <a href="#">
                    <strong style={{ fontSize: "20px" }}>Fruits</strong>
                    <br />
                    87-ITEMS
                  </a>
                  <img src="/grapes.svg" alt="Grapes" />
                  <img className="layer-icon" src="/grapes.svg" alt="Grapes" />
                </div>

                <div className="manu_item">
                  <a href="#">
                    <strong style={{ fontSize: "20px" }}>Mushroom</strong>
                    <br />
                    43-ITEMS
                  </a>
                  <img src="/mushroom.svg" alt="Mushroom" />
                  <img className="layer-icon" src="/cat4.svg" alt="Mushroom" />
                </div>

                <div className="manu_item">
                  <a href="#">
                    <strong style={{ fontSize: "20px" }}>Oats</strong>
                    <br />
                    64-ITEMS
                  </a>
                  <img src="/cat5.svg" alt="Oats" />
                  <img className="layer-icon" src="/grapes.svg" alt="Oats" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="manu_sec">
                <div className="manu_item">
                  <a href="#">
                    <strong style={{ fontSize: "20px" }}>Vegetables</strong>
                    <br />
                    14-ITEMS
                  </a>
                  <img src="assets/leaf.svg" alt="Leaf" />
                  <img
                    className="layer-icon"
                    src="assets/leaf.svg"
                    alt="Leaf"
                  />
                </div>

                <div className="manu_item">
                  <a href="#">
                    <strong style={{ fontSize: "20px" }}>Dairy</strong>
                    <br />
                    22-ITEMS
                  </a>
                  <img src="assets/leaf.svg" alt="Dairy" />
                  <img
                    className="layer-icon"
                    src="assets/leaf.svg"
                    alt="Dairy"
                  />
                </div>

                <div className="manu_item">
                  <a href="#">
                    <strong style={{ fontSize: "20px" }}>Bread</strong>
                    <br />
                    43-ITEMS
                  </a>
                  <img src="assets/bread.svg" alt="Bread" />
                  <img
                    className="layer-icon"
                    src="assets/bread.svg"
                    alt="Bread"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
