import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";
import {faShirt} from "@fortawesome/free-solid-svg-icons";
import {faIdCardClip} from "@fortawesome/free-solid-svg-icons";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {faChalkboardUser} from "@fortawesome/free-solid-svg-icons";
function RegiForm(props) {
    return (
        <Container fluid="true" className="registration">

            <form className="formBorder" action="">
                <h4 className="boldTitle mb-5">Registration Form</h4>
                <Row className="firstRow">
                    <Col md={6} sm={12} lg={6}>
                        <label htmlFor="x"><FontAwesomeIcon icon={faPeopleGroup} />   Team Name</label>
                        <input
                            type="text"
                            placeholder="Team Name"
                            className="form-control"
                        />
                    </Col>
                    <Col md={6} sm={12} lg={6}>
                        <label htmlFor="x"><FontAwesomeIcon icon={faBuildingColumns} />   Institute Name</label>
                        <input
                            type="text"
                            placeholder="Institute Name"
                            className="form-control"
                        />
                    </Col>
                    
                </Row>
                <hr/>
               <div className="firstContestant mt-4">
                   <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} />    Team Member-1</h4>
                   <hr/>
                   <Row className='row'>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> First Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> Last Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                   </Row>
                   <Row className='row'>
                       <Col>
                           <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                           <input
                               type="email"
                               placeholder="E-mail"
                               className="form-control"
                           />
                           <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                           <input
                               type="text"
                               placeholder="Phone number"
                               className="form-control"
                           />
                           <label><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                           <input
                               className="form-check-input"
                               type="radio"
                               name="gender"
                               value="male"
                           /> <label className="mx-1" htmlFor="">Male</label>
                           <input
                               className="form-check-input mx-1"
                               type="radio"
                               name="gender"
                               value="female"
                           /> <label htmlFor=""> Female</label><br/>
                           <label htmlFor=""><FontAwesomeIcon icon={faCalendarDays} />  Date of Birth</label><br/>
                           <input
                               type="date"
                               className="form-control"
                               required="true"
                           />
                           <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} />  NID/Birth Registration No</label><br/>
                           <input
                               type="text"
                               className="form-control"
                           />
                           <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                           <select name="tShirt" id="available" className="form-control w-25">
                               <option value="">Select</option>
                               <option value="">S</option>
                               <option value="">M</option>
                               <option value="">L</option>
                               <option value="">XL</option>
                               <option value="">XXL</option>
                           </select>

                           <label htmlFor="cc"><FontAwesomeIcon icon={faAddressCard} /> Contestant ID</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />
                           <label htmlFor="cc"><FontAwesomeIcon icon={faImage} />   Contestant Photo</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />

                       </Col>
                   </Row>
                   <hr/>
               </div>
               <div className="firstContestant mt-5">
                   <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} />  Team Member-2</h4>
                   <hr/>
                   <Row className='row'>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />    First Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />    Last Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                   </Row>
                   <Row className='row'>
                       <Col>
                           <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                           <input
                               type="email"
                               placeholder="E-mail"
                               className="form-control"
                           />
                           <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                           <input
                               type="text"
                               placeholder="Phone number"
                               className="form-control"
                           />
                           <label><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                           <input
                               className="form-check-input"
                               type="radio"
                               name="gender"
                               value="male"
                           /> <label className="mx-1" htmlFor="">Male</label>
                           <input
                               className="form-check-input mx-1"
                               type="radio"
                               name="gender"
                               value="female"
                           /> <label htmlFor=""> Female</label><br/>
                           <label htmlFor=""><FontAwesomeIcon icon={faCalendarDays} />  Date of Birth</label><br/>
                           <input
                               type="date"
                               className="form-control"
                               required="true"
                           />
                           <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} />  NID/Birth Registration</label><br/>
                           <input
                               type="text"
                               className="form-control"
                           />
                           <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                           <select name="tShirt" id="available" className="form-control w-25">
                               <option value="">Select</option>
                               <option value="">S</option>
                               <option value="">M</option>
                               <option value="">L</option>
                               <option value="">XL</option>
                               <option value="">XXL</option>
                           </select>

                           <label htmlFor="cc"> <FontAwesomeIcon icon={faAddressCard} />   Contestant ID</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />
                           <label htmlFor="cc"><FontAwesomeIcon icon={faImage} />   Contestant Photo</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />

                       </Col>
                   </Row>
                   <hr/>
               </div>
               <div className="firstContestant mt-5">
                   <h4 className="title mb-4"> <FontAwesomeIcon icon={faUser} />Team Member-3</h4>
                   <hr/>
                   <Row className='row'>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />    First Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />    Last Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                   </Row>
                   <Row className='row'>
                       <Col>
                           <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                           <input
                               type="email"
                               placeholder="E-mail"
                               className="form-control"
                           />
                           <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                           <input
                               type="text"
                               placeholder="Phone number"
                               className="form-control"
                           />
                           <label><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                           <input
                               className="form-check-input"
                               type="radio"
                               name="gender"
                               value="male"
                           /> <label className="mx-1" htmlFor="">Male</label>
                           <input
                               className="form-check-input mx-1"
                               type="radio"
                               name="gender"
                               value="female"
                           /> <label htmlFor=""> Female</label><br/>
                           <label htmlFor=""><FontAwesomeIcon icon={faCalendarDays} />    Date of Birth</label><br/>
                           <input
                               type="date"
                               className="form-control"
                               required="true"
                           />
                           <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} />  NID/Birth Registration No</label><br/>
                           <input
                               type="text"
                               className="form-control"
                           />
                           <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt size</label><br/>
                           <select name="tShirt" id="available" className="form-control w-25">
                               <option value="">Select</option>
                               <option value="">S</option>
                               <option value="">M</option>
                               <option value="">L</option>
                               <option value="">XL</option>
                               <option value="">XXL</option>
                           </select>

                           <label htmlFor="cc"><FontAwesomeIcon icon={faAddressCard} />  Contestant ID</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />
                           <label htmlFor="cc"><FontAwesomeIcon icon={faImage} />   Contestant Photo</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />

                       </Col>
                   </Row>
                   <hr/>
               </div>
               <div className="firstContestant mt-5">
                   <h4 className="title mb-4"><FontAwesomeIcon icon={faChalkboardUser} />   Coach Info</h4>
                   <hr/>
                   <Row className='row'>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />    First Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                       <Col md={6} sm={12} lg={6}>
                           <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />    Last Name</label>
                           <input
                               type="text"
                               placeholder="First Name"
                               className="form-control"
                           />
                       </Col>
                   </Row>
                   <Row className='row'>
                       <Col>
                           <label htmlFor="x"><FontAwesomeIcon icon={faIdCardClip} />   Designation</label>
                           <select name="" id="" className="form-control w-25">
                               <option value="">Select</option>
                               <option value="">Lecturer</option>
                               <option value="">Assistant Professor</option>
                               <option value="">Associate Professor</option>
                               <option value="">Professor</option>
                           </select>
                           <label htmlFor="x">  <FontAwesomeIcon icon={faAt} />E-mail</label>
                           <input
                               type="email"
                               placeholder="E-mail"
                               className="form-control"
                           />
                           <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                           <input
                               type="text"
                               placeholder="Phone number"
                               className="form-control"
                           />
                           <label><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                           <input
                               className="form-check-input"
                               type="radio"
                               name="gender"
                               value="male"
                           /> <label className="mx-1" htmlFor="">Male</label>
                           <input
                               className="form-check-input mx-1"
                               type="radio"
                               name="gender"
                               value="female"
                           /> <label htmlFor=""> Female</label><br/>
                           <label htmlFor="x"><FontAwesomeIcon icon={faBuildingColumns} />  Institution Name</label>
                           <input
                               type="text"
                               placeholder="Institute"
                               className="form-control"
                           />

                           <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} />  NID/Birth Registration</label><br/>
                           <input
                               type="text"
                               className="form-control"
                           />
                           <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                           <select name="tShirt" id="available" className="form-control w-25">
                               <option value="">Select</option>
                               <option value="">S</option>
                               <option value="">M</option>
                               <option value="">L</option>
                               <option value="">XL</option>
                               <option value="">XXL</option>
                           </select>

                           <label htmlFor="cc"><FontAwesomeIcon icon={faAddressCard} />  Coach ID</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />
                           <label htmlFor="cc"><FontAwesomeIcon icon={faImage} />   Coach Photo</label><br/>
                           <input
                               type="file"
                               className="form-control"
                           />

                       </Col>
                   </Row>
               </div>
               <div className="text-center">
                   <button className="submitBtn btn btn-success">Submit</button>
               </div>
            </form>
        </Container>
    );
}

export default RegiForm;