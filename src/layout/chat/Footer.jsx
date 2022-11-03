import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <form action="">
        <div className="message">
          <div className="message-icon">
            <i className="fas fa-plus-circle"></i>
          </div>
          <div className="message-content">
            <input type="text" size="25" />
          </div>
          <div className="message-submit">
            <button>send</button>
          </div>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
