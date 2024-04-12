import React from "react";
import userprofile from '../user-profile.png';
import { useState,useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
const Card = () =>
{
  const [data,Setdata]=useState({
  id:'',
  name:'',
  designation:'',
  mobile_no_1:'',
  mobile_no_2:'',
  email:'',
  dept:'',
  website:'',
  vcard:'',
  qrcode:''
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>
{

  axios.get("https://service.fuyucorp.com:4010/getEmp?id=1").then((res)=>
{
  const data = res.data;
  Setdata({
   id:data.id,
   name:data.name,
   designation:data.designation,
   mobile_no_1:data.mobile_no_1,
   mobile_no_2:data.mobile_no_2,
   email:data.email,
   dept:data.dept,
   website:data.website,
   vcard:data.vcard,
   qrcode:data.qrcode
  });

});

},[]);


return(<React.Fragment>
    <div className="header">
    <div id="topActions" ><div><a id="share"><div class="icon topAction"><svg viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000" stroke-width="2"><circle cx="17" cy="5" r="3"></circle><circle cx="5" cy="12" r="3"></circle><circle cx="17" cy="19" r="3"></circle><path d="M7.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></svg></div></a> 
    <a id="showQR" onClick={handleShow}><div class="icon topAction">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round"><g fill="none" stroke="#000" stroke-width="2"><path d="M4 4h4v4H4zm0 12h4v4H4zM16 4h4v4h-4z"></path><path d="M12 3v15a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H3"></path></g><path fill="#fff" d="M15 15h2v2h-2z"></path></svg>
        </div></a></div></div>
    <div className="headerImgC"><span className="logotext">Employee Virtual Card</span></div>
    </div>
   <main className="main">
   <div className="profile">
    <img src={userprofile}/>
    
    <div className="info">
      <p class="name text"> {data.name} </p>
      <p class="jobtitle text"> {data.designation}  </p>
     
 
    </div>
    </div>
  <br/>
  <div class="actions">
    <div id="cta">
      <a id="vcard" href={data.vcard} rel="noreferrer" download="" target="_blank" aria-label="Save Contact" className="button">
        <div class="icon action">
          <svg viewBox="0 0 24 24"  fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="8.5" cy="7" r="4" transform="matrix(.875 0 0 .875 4.563 -.625)" fill="none" stroke="#fff" stroke-width="2.29"></circle>
            <path d="M5 18c0-3.863 3.137-7 7-7s7 3.137 7 7m-7-2v6m3-3l-3 3-3-3" fill="none" stroke="#fff" stroke-width="2"></path>
          </svg>
        </div>
        <p class="action">Save Contact</p>
      </a>
    </div>
    <div class="actionsC">
      <div class="actionBtn">
        <a  href={"tel:"+data.mobile_no_1} target="_blank" className="iconbackground" rel="noopener noreferrer" aria-label="Mobile">
          <div class="icon action">
          <svg  viewBox="0 0 216 216">
              <path d="M103.57 180.73h8.87v8.87h-8.87v-8.87zm-31.8-67.01c1.07.62 2.25.94 3.41.94 2.25 0 4.47-1.14 5.72-3.24l35.48-59.43c1.87-3.16.85-7.24-2.3-9.12a6.64 6.64 0 00-9.13 2.3L69.47 104.6a6.668 6.668 0 002.3 9.12zm98.32-85.56v159.67c0 14.68-11.94 26.61-26.61 26.61H72.52c-14.68 0-26.61-11.94-26.61-26.61V28.16c0-14.67 11.94-26.61 26.61-26.61h70.96c14.68 0 26.61 11.94 26.61 26.61zm-75.4-8.87c0 2.45 1.99 4.44 4.44 4.44h17.74c2.44 0 4.43-1.98 4.43-4.44s-1.99-4.43-4.43-4.43H99.13c-2.44 0-4.44 1.98-4.44 4.43zm26.62 157.01c0-2.44-1.99-4.43-4.43-4.43H99.13c-2.44 0-4.44 1.99-4.44 4.43v17.74a4.44 4.44 0 004.44 4.43h17.74c2.44 0 4.43-1.99 4.43-4.43V176.3h.01zm31.04-139.26h-88.7v124.19h88.71l-.01-124.19zM71.84 75.61c1.06.61 2.2.9 3.35.9 2.29 0 4.5-1.19 5.75-3.3l12.41-21.29a6.658 6.658 0 00-11.5-6.71l-12.42 21.3a6.653 6.653 0 002.41 9.1z" fill="#fff"></path>
            </svg>
          </div>
        </a>
        <p class="text"> SG Mobile</p>
      </div>
    </div>
    <div class="actionsC">
      <div class="actionBtn">
        <a href={"tel:"+data.mobile_no_2} target="_blank"  className="iconbackground" rel="noopener noreferrer" aria-label="Mobile">
          <div class="icon action">
            <svg  viewBox="0 0 216 216">
              <path d="M103.57 180.73h8.87v8.87h-8.87v-8.87zm-31.8-67.01c1.07.62 2.25.94 3.41.94 2.25 0 4.47-1.14 5.72-3.24l35.48-59.43c1.87-3.16.85-7.24-2.3-9.12a6.64 6.64 0 00-9.13 2.3L69.47 104.6a6.668 6.668 0 002.3 9.12zm98.32-85.56v159.67c0 14.68-11.94 26.61-26.61 26.61H72.52c-14.68 0-26.61-11.94-26.61-26.61V28.16c0-14.67 11.94-26.61 26.61-26.61h70.96c14.68 0 26.61 11.94 26.61 26.61zm-75.4-8.87c0 2.45 1.99 4.44 4.44 4.44h17.74c2.44 0 4.43-1.98 4.43-4.44s-1.99-4.43-4.43-4.43H99.13c-2.44 0-4.44 1.98-4.44 4.43zm26.62 157.01c0-2.44-1.99-4.43-4.43-4.43H99.13c-2.44 0-4.44 1.99-4.44 4.43v17.74a4.44 4.44 0 004.44 4.43h17.74c2.44 0 4.43-1.99 4.43-4.43V176.3h.01zm31.04-139.26h-88.7v124.19h88.71l-.01-124.19zM71.84 75.61c1.06.61 2.2.9 3.35.9 2.29 0 4.5-1.19 5.75-3.3l12.41-21.29a6.658 6.658 0 00-11.5-6.71l-12.42 21.3a6.653 6.653 0 002.41 9.1z" fill="#fff"></path>
            </svg>
          </div>
        </a>
        <p class="text"> MY Mobile</p>
      </div>
    </div>
    <div class="actionsC">
      <div class="actionBtn">
        <a  href={"mailto:"+data.email}target="_blank" className="iconbackground" rel="noopener noreferrer" aria-label="email">
          <div class="icon action">
            <svg  width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <path d="M22 6l-10 7L2 6"></path>
            </svg>
          </div>
        </a>
        <p class="text"> Email </p>
      </div>
    </div>
    <div class="actionsC">
      <div class="actionBtn">
        <a href={data.website} target="_blank" className="iconbackground" rel="noopener noreferrer" aria-label="website">
          <div class="icon action">
            <svg  width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
            </svg>
          </div>
        </a>
        <p class="text"> Website </p>
      </div>
    </div>
  
  </div>
   </main>
   <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
        <div className="qrView">
          <div className="qr">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" shape-rendering="crispEdges">
            <path fill="#ffffff" d="M0 0h41v41H0z"/>
            <path stroke="#000000" d="M4 4.5h7m2 0h2m1 0h1m1 0h1m4 0h1m1 0h2m3 0h7M4 5.5h1m5 0h1m2 0h1m1 0h1m1 0h6m1 0h1m5 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h1m2 0h5m2 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1m2 0h2m1 0h2m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m3 0h2m1 0h2m3 0h1m3 0h2m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h2m1 0h3m2 0h1m1 0h3m2 0h1m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M16 11.5h3m1 0h1m1 0h1m4 0h1M7 12.5h2m1 0h2m1 0h2m3 0h1m1 0h2m1 0h1m3 0h2m4 0h2M6 13.5h1m1 0h1m2 0h1m1 0h5m2 0h2m1 0h1m3 0h2m2 0h2M4 14.5h1m4 0h2m1 0h2m1 0h1m1 0h2m2 0h1m1 0h3m1 0h3m1 0h1m2 0h3M4 15.5h1m3 0h2m1 0h3m3 0h2m1 0h1m2 0h2m5 0h3m1 0h2M4 16.5h3m2 0h2m3 0h1m2 0h1m6 0h3m1 0h3m1 0h2m1 0h2M4 17.5h2m3 0h1m1 0h1m1 0h4m1 0h1m1 0h1m2 0h2m1 0h2m1 0h1m3 0h4M4 18.5h3m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h2m1 0h3m5 0h1M5 19.5h1m8 0h2m1 0h4m1 0h1m1 0h1m4 0h1m2 0h1m1 0h2M6 20.5h1m2 0h2m1 0h1m2 0h3m2 0h2m2 0h1m1 0h1m2 0h6M6 21.5h1m1 0h2m3 0h5m1 0h2m1 0h1m1 0h1m1 0h1m3 0h3m3 0h1M5 22.5h2m3 0h1m1 0h1m1 0h4m2 0h1m1 0h2m1 0h1m1 0h1m4 0h1m1 0h1m1 0h1M4 23.5h5m3 0h7m1 0h4m4 0h2m1 0h1m1 0h2M4 24.5h1m1 0h1m3 0h2m1 0h1m7 0h1m2 0h1m2 0h1m2 0h2m3 0h1M4 25.5h2m1 0h2m2 0h3m3 0h1m3 0h4m1 0h1m1 0h1m1 0h5M4 26.5h1m1 0h1m1 0h4m1 0h5m1 0h1m1 0h4m1 0h2m7 0h2M4 27.5h1m1 0h1m1 0h2m1 0h1m1 0h1m2 0h2m1 0h4m1 0h1m1 0h3m3 0h1m1 0h1M4 28.5h2m3 0h2m2 0h2m4 0h4m4 0h7m1 0h1M12 29.5h2m1 0h1m2 0h1m2 0h2m2 0h1m2 0h1m3 0h2m1 0h1M4 30.5h7m1 0h1m1 0h5m1 0h1m1 0h1m1 0h1m2 0h2m1 0h1m1 0h3M4 31.5h1m5 0h1m2 0h1m3 0h1m1 0h2m1 0h7m3 0h3m1 0h1M4 32.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h4m1 0h1m1 0h9m2 0h1M4 33.5h1m1 0h3m1 0h1m1 0h1m1 0h4m1 0h2m5 0h1m1 0h2m1 0h1m3 0h1M4 34.5h1m1 0h3m1 0h1m2 0h2m4 0h6m2 0h3m2 0h2m1 0h2M4 35.5h1m5 0h1m4 0h1m3 0h1m1 0h4m1 0h1m1 0h4m1 0h1m1 0h2M4 36.5h7m2 0h2m2 0h4m1 0h2m1 0h1m1 0h3m1 0h2m1 0h1"/></svg>
      </div>
     </div>
     </Modal.Body>
      </Modal>
</React.Fragment>)
}
export default Card;