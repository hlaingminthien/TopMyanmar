import React, { useState } from "react";

import MyLink from "../../tools/myLink";
import MyInput from "../../tools/myInput";
import * as Colors from "../../config/color.config";
import { withMedia } from "react-media-query-hoc";
import topmyanmar from '../../assets/image/carosel/topmyanmar.png'

const Footer = props => {
  const { media } = props;
  const [err, setErr] = useState('');

  const check = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setErr("");
    }
    else if (!e.target.value) setErr("");
    // else setErr('');
    else setErr("Please fill valid email!");
  }

  /////////
  var email = require("emailjs/email");
  var server = email.server.connect({
    user: "username",
    password: "password",
    host: "smtp.your-email.com",
    ssl: false
  });

  var message = {
    text: "i hope this works",
    from: "you <username@your-email.com>",
    to: "someone <someone@your-email.com>, another <another@your-email.com>",
    cc: "else <else@your-email.com>",
    subject: "testing emailjs",
    attachment:
      [
        { data: "<html>i <i>hope</i> this works!</html>", alternative: true },
      ]
  };

  const sendEmail = (e) => {
    console.log('hello');
    server.send(message, function (err, message) { console.log(err || message); });
  }

  /////////
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/*  */}
      <div
        className="row border-top pt-3"
        style={{ color: Colors.textwhite }}
      >
        <div className="container-fluid py-3" style={{ background: "rgb(197, 197, 197)" }}>
          <div className="d-flex flex-row flex-wrap justify-content-between text-light">
            <div className="d-flex flex-row flex-fill align-items-center">
              {/* <i className="fa fa-envelope fa-2x px-4" /> */}
              <div className="col-lg-12">
                <h3>Don't know where to start? Let's get in touch!</h3> <br></br>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeHolder={"Enter your name"}
                        style={{ background: 'white', color: 'black', height: '50px', width: '100%', padding: '5px' }} required
                      />
                      <textarea
                        type="text"
                        placeHolder={"Enter your message"}
                        style={{ background: 'white', color: 'black', marginTop: '20px', width: '100%', height: '120px', padding: '5px' }} required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="mail" text="Froml"
                        placeHolder={"Enter your email"} onChange={(e) => check(e)}
                        style={{ background: "white", color: 'black', height: '50px', width: '100%', padding: '5px' }} required
                      />
                      <span style={{ color: 'red', display: 'block', position: 'absolute' }}>{err}</span>
                      <input
                        type="text"
                        placeHolder={"Enter your subject"}
                        style={{ background: 'white', color: 'black', marginTop: '20px', height: '50px', width: '100%', padding: '5px' }} required
                      />
                      <input type="button" disabled={err !== ''} value="Send" style={{ height: 50, width: '100%', background: '#bf961a', color: Colors.textwhite, marginTop: '20px' }}
                        value="Send Email" onClick={() => sendEmail()}></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* {media.mobile || (
                <div className="align-self-center">
                  <a alt="" href="www.facebook.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-facebook pr-3" />
                  </a>
                  <a href="www.twitter.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-twitter pr-3" />
                  </a>
                  <a href="www.instagram.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-instagram pr-3" />
                  </a>
                  <a href="www.youtube.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-youtube pr-3" />
                  </a>
                </div>
              )} */}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="text-light py-4" style={{ background: Colors.Footerbg }}>
        <div className="container py-4">
          <div className="row text-center">
            <div className="col-lg-3 col-md-3 col-12 pb-4">
              <img src={topmyanmar} className="w-75" alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-12 px-2 text-left">
              <h5>Don't know where to start? Let's get in touch!</h5>
              <div>
                Let us know what we can do to make your life easier and feel confident that your loved one is getting the care they deserve.
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12 px-2 text-left">
              <h5>HOW TO FIND US</h5>
              <div style={{ marginBottom: '12px' }}><i className="fa fa-map-marker for-icon" aria-hidden="true"></i>
                PaPa 3/B(Kha), Yaw Minn Gyi Road, 68th street, Industrial Zone (1), Pyigitagon Township, Mandalay
            </div>
              <div style={{ marginBottom: '12px' }}><i className="fa fa-volume-control-phone for-icon" aria-hidden="true"></i>
                02-5153502, 02-5153838, 09-2026711, 09-797009101, 09797009105,09797009106
            </div>
              <div style={{ marginBottom: '12px' }}><i className="fa fa-envelope-o for-icon" aria-hidden="true"></i>
                topmyanmar.mtn@gmail.com
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withMedia(Footer);
