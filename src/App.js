import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function App() {
  return <Email email={emailMessage} />;
}

function Email({ email }) {
  const { sender, subject, date, message } = email;
  return (
    <>
      <div>{sender}</div>
      <div>{subject}</div>
      <div>{date}</div>
      <div>{message}</div>
    </>
  );
}

var emailMessage = {
  sender: "Mr Sender",
  subject: "Test subject",
  date: "01/01/1999",
  message: "This is the email message."
};

Email.propTypes = {
  email: PropTypes.shape({
    sender: PropTypes.string,
    subject: PropTypes.string,
    date: PropTypes.string,
    message: PropTypes.string
  }).isRequired
};

export default App;
