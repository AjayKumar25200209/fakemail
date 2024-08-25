import React, { useState , useContext } from 'react';
import "./mycss.css";
import image1 from "./image1.jpg";
import time from "./time.jpg";
import logo0 from "./logo.jpg";
import bot from "./bot.jpg";
import { FormContext } from './FormContext';

function Maincontent() {
  const [con, setcon] = useState(false);
  const { formData, setFormData } = useContext(FormContext);

  function hide() {
    setcon(pre=>!pre)
    
  }

  return (
    <div className="parent">
      <img src={image1} alt="" className="img1" />
      <p className="approval">Outing Request Approved-{formData.name} {formData.regNumber}</p>

      {!con?  (
        <div  onClick={hide} className="logoflex">
          <img src={logo0} alt="" />
          <span className="logospan">
            <p className="hostel">Hostel KCT</p>
            <p className="rak">{formData.name} {formData.regNumber},+2</p>
          </span>
          <img src={time} alt="" />
        </div>
      ): "" }

      {con ? (
        <div  onClick={hide} >
          <div className="logoflex">
            <img src={logo0} alt="" />
            <span className="logospan">
              <p className="hostel" style={{ color: "#2c79b5" }}>Hostel KCT</p>
              <p className="rak">hostel@kct.ac.in</p>
            </span>
            <img src={time} alt="" />
          </div>
          <div className="extra">
            <span className="extra2">
              <p style={{ color: "white" }}>To </p>
              <p><span style={{ color: "#2c79b5" }}>You</span> {formData.email}</p>
            </span>
            <span className="extra2">
              <p style={{ color: "white" }}>Cc</p>
              <p><span style={{ color: "#2c79b5" }}>Hostel KCTs</span> hostel@kct.ac.in <br />
                <span style={{ color: "#2c79b5" }}>Security Officer</span> KCT Securityofficer@kct.ac.in <br />
                {formData.mailDate}
              </p>
            </span>
          </div>
        </div>
      ) : ""}

      <div className="mainsec">
        <p>Dear {formData.name},</p>
        <p>Your outing request has been approved for the below mentioned date and time</p>
        <span className="flex2">
          <span>
            Out Date:{formData.date} <br />
            Out Time:{formData.outTime}
            <span className="liness"></span>
          </span>
          <span>
            <p>Purpose of Outing:{formData.purpose}</p>
            <span className="liness"></span>
          </span>
          <span>
            <p>Return Date:{formData.date}</p>
            <p>Return Time:{formData.returnTime}</p>
            <span className="liness"></span>
          </span>
        </span>
        <p>Regards <br /> Hostel Administration</p>
      </div>

      <img src={bot} alt="" width="100%" className="btt" />
    </div>
  );
}

export default Maincontent;
