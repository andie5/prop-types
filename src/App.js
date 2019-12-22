import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const AddressLabel = ({ person }) => {
  const { name, addressLine1, addressLine2 } = person;

  return (
    <>
      <div>{name}</div>
      <div>{addressLine1}</div>
      <div>{addressLine2}</div>
    </>
  );
};

const fromAddress = {
  name: "Mr Sender",
  addressLine1: "123 Fake St. Boston, ",
  addressLine2: "MA 02118"
};

const toAddress = {
  name: "Mr Receiver",
  addressLine1: "123 Fake St. Boston, ",
  addressLine2: "CA 12345"
};

function App() {
  return <Envelope toPerson={toAddress} fromPerson={fromAddress} />;
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className={"envelope"}>
      <AddressLabel className="fromLabel" person={fromPerson} />
      <AddressLabel className="toLabel" person={toPerson} />
      <Stamp />
    </div>
  );
}

Envelope.propTypes = {
  toPerson: PropTypes.object.isRequired,
  fromPerson: PropTypes.object.isRequired
};

function Stamp() {
  return (
    <div className="stamp">
      <span className="text">Stamp</span>
    </div>
  );
}

AddressLabel.propTypes = {
  personAddress: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  })
};

export default App;
