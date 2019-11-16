import React from 'react';
import PropTypes from "prop-types";

const AddressLabel = (personAddress) => {
  const { name, addressLine1, addressLine2 } = personAddress;
  return (
    <>
      <div>Name: {name}</div>
      <div>Address 1: {addressLine1}</div>
      <div>Address 2: {addressLine2}</div>
    </>
  );
}

const personAddress = {
  name: "John Doe",
  addressLine1: "123 Fake St. Boston, ",
  addressLine2: "MA 02118",
}

function App() {
  return (
    <AddressLabel person={personAddress} />
  );
}


AddressLabel.PropTypes = {
  personAddress: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  })
}



export default App;
