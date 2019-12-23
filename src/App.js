import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const CreditCard = ({ cardInfo, className }) => {
  const { name, expirationDate, creditCardNo, bankName } = cardInfo;

  return (
    <div className="bankDetails">
      <h1 style={{ textAlign: "right", color: "#fff", fontWeight: "900" }}>
        {bankName}
      </h1>
      <div
        style={{
          textAlign: "left",
          color: "#fff",
          fontWeight: "900",
          fontSize: "1.25em"
        }}
      >
        {creditCardNo}
      </div>

      <div style={{ textAlign: "left", color: "#fff", fontWeight: "900" }}>
        Valid Through {expirationDate}
      </div>
      <br />
      <div style={{ textAlign: "left", color: "#fff", fontWeight: "900" }}>
        {name}
      </div>
    </div>
  );
};

const cardInfo = {
  name: "Mr Sender",
  expirationDate: "10/12",
  creditCardNo: "1234 5678 9123 4567",
  bankName: "Bank Name"
};

function App() {
  return <CreditCard cardInfo={cardInfo} />;
}

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    creditCardNo: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired
  })
};

export default App;
