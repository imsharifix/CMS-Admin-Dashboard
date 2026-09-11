import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

import Chart from "../../components/Chart/Chart";
import { productChartData } from "../../Datas";

import courseImg from "../../assets/imgs/NuxtJs.webp";

// Custom Select Component
function CustomSelect({ label, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const options = [
    { value: "Yes", icon: "✓" },
    { value: "No", icon: "×" },
  ];

  // بستن منو وقتی بیرونش کلیک شود
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="customSelectWrapper" ref={selectRef}>
      <label className="productButtomTitle">{label}</label>

      <button
        type="button"
        className={`customSelect ${isOpen ? "customSelectOpen" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="customSelectSelected">
          <span
            className={`selectIcon ${
              value === "Yes" ? "selectIconYes" : "selectIconNo"
            }`}
          >
            {selectedOption.icon}
          </span>

          <span>{value}</span>
        </span>

        <span className={`selectArrow ${isOpen ? "selectArrowOpen" : ""}`}>
          ⌄
        </span>
      </button>

      {isOpen && (
        <div className="customSelectMenu">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              className={`customSelectOption ${
                value === option.value ? "customSelectOptionActive" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <span
                className={`selectIcon ${
                  option.value === "Yes" ? "selectIconYes" : "selectIconNo"
                }`}
              >
                {option.icon}
              </span>

              <span>{option.value}</span>

              {value === option.value && (
                <span className="selectedCheck">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Product() {
  const [inStock, setInStock] = useState("No");
  const [active, setActive] = useState("Yes");

  return (
    <div className="product">
      {/* Header */}
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>

        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      {/* Top Section */}
      <div className="productTop">
        {/* Chart */}
        <div className="productTopLeft">
          <Chart title="Sale in Month" data={productChartData} dataKey="sale" />
        </div>

        {/* Product Info */}
        <div className="productTopRight">
          <div className="productTopInfo">
            <img src={courseImg} alt="" className="productInfoImg" />

            <span className="productName">NextJs</span>
          </div>

          <div className="productInfoButtom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID :</div>

              <div className="productInfoValue">132</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Name :</div>

              <div className="productInfoValue">Next Js</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Sales :</div>

              <div className="productInfoValue">$25000</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">Status :</div>

              <div className="productInfoValue productStatusActive">Active</div>
            </div>

            <div className="productInfoItem">
              <div className="productInfoKey">In Stock :</div>

              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="productButtom">
        {/* Left */}
        <div className="productButtomLeft">
          <label htmlFor="productName" className="productButtomTitle">
            Product Name
          </label>

          <input
            id="productName"
            type="text"
            placeholder="Dell Laptop"
            className="productButtomInput"
          />

          {/* In Stock */}
          <CustomSelect
            label="In Stock"
            value={inStock}
            onChange={setInStock}
          />

          {/* Active */}
          <CustomSelect label="Active" value={active} onChange={setActive} />
        </div>

        {/* Right */}
        <div className="productButtomRight">
          <img src={courseImg} alt="" className="productButtonImg" />

          <button className="productButtonUploadBtn">Upload (Edit)</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
