import React, {useContext,useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
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

function FirstContestant({secondCall,inputChange}) {
    
    
     

    const {data} = useContext(FormContext);
    

    return (
        <div className="firstContestant mt-4">
            
            <Row>
            
                <Col md={6} sm={12} lg={6}>
                
                    <label htmlFor="x"><FontAwesomeIcon icon={faPeopleGroup} />     Team Name</label>
                    <input
                        type="text"
                        placeholder="Team Name"
                        className="form-control"
                        name="teamName"
                        onChange={inputChange}
                        value={!data.teamName===""?"":data.teamName}
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faBuildingColumns} />   Institute Name</label>
                    <input
                        type="text"
                        placeholder="Institute Name"
                        className="form-control"
                        value={!data.instituteName===""?"":data.instituteName}
                        name="instituteName"
                        onChange={inputChange}
                    />
                </Col>


                
            </Row>
            <hr/>
            <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} />    Team Member-1</h4>
            <hr/>
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="firstUserName1"
                        onChange={inputChange}
                        value={!data.firstUserName1===""?"":data.firstUserName1}
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> Last Name</label>
                    <input
                        type="text"
                        placeholder="Second Name"
                        className="form-control"
                        name="firstUserName2"
                        onChange={inputChange}
                        value={!data.firstUserName2===""?"":data.firstUserName2}

                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-control"
                        name="firstUserEmail"
                        onChange={inputChange}
                        value={!data.firstUserEmail===""?"":data.firstUserEmail}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="firstUserPhone"
                        onChange={inputChange}
                        value={!data.firstUserPhone===""?"":data.firstUserPhone}
                    />
                    <label for="gender" className='gendercc'><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="firstUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.firstUserGender==="male"}
                    />
                    <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="firstUserGender"
                        onChange={inputChange}
                        checked={data.firstUserGender==="female"}
                    /> <label htmlFor=""> Female</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="others"
                        name="firstUserGender"
                        onChange={inputChange}
                        checked={data.firstUserGender==="others"}
                    /> <label htmlFor=""> Others</label><br/>
                    <label htmlFor="" className='dateofbirthcss'><FontAwesomeIcon icon={faCalendarDays} />  Date of Birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                        name="firstUserDob"
                        onChange={inputChange}
                        value={!data.firstUserDob===""?"":data.firstUserDob}
                    />
                    <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} />  NID/Birth Registration No</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="firstUserNid"
                        onChange={inputChange}
                        value={!data.firstUserNid===""?"":data.firstUserNid}
                    />
                    <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="firstUserTShirt"
                        onChange={inputChange}
                        value={!data.firstUserTShirt===""?"":data.firstUserTShirt}
                    >
                        <option value="0">Select</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>

                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faAddressCard} /> Contestant ID</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="firstUserId"
                        onChange={inputChange}
                    />
                    {
                        data.firstUserId?(
                            <div className='photoSelect'>Your Uploaded File is : {data.firstUserId.name}</div>
                        ):(
                            <div className='photoSelect'>Please select a photo</div>
                        )
                    }
                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faImage} />   Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="firstUserPhoto"
                        onChange={inputChange}
                    />
                    {
                        data.firstUserPhoto?(
                            <div className='photoSelect'>Your Uploaded File is : {data.firstUserPhoto.name}</div>
                        ):""
                    }
                    <div className="nextBtn">
                        <Button onClick={secondCall}><FontAwesomeIcon icon={faAnglesRight} /> Next</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FirstContestant;