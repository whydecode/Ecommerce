import React from "react";
import "./ContactScreen.css";
const ContactScreen = () => {
  return (
    <div id="contact" className="contact">
      <div id="content"></div>
      <div className="formdiv">
        <form name="contact" method="post" onSubmit="submit">
          <h2>Contact</h2>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <input
              type="text"
              name="message"
              placeholder="Message"
              id="message"
              required
            />
          </div>
          <button type="submit" id="submitbutton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;
