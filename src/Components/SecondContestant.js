import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
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
function SecondContestant({thirdCall,firstCall,inputChange}) {

    const {data} = useContext(FormContext);

    return (
        <div className="firstContestant mt-5">
            <hr/>
            <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} />    Team Member-2</h4>
            <hr/>
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="secondUserName1"
                        onChange={inputChange}
                        value={!data.secondUserName1===""?"":data.secondUserName1}

                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> Last Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="secondUserName2"
                        onChange={inputChange}
                        value={!data.secondUserName2===""?"":data.secondUserName2}

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
                        name="secondUserEmail"
                        onChange={inputChange}
                        value={!data.secondUserEmail===""?"":data.secondUserEmail}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="secondUserPhone"
                        onChange={inputChange}
                        value={!data.secondUserPhone===""?"":data.secondUserPhone}

                    />
                    <label className='dateofbirthcss'><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="secondUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.secondUserGender==="male"}
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="secondUserGender"
                        onChange={inputChange}
                        checked={data.secondUserGender==="female"}
                    /> <label htmlFor=""> Female</label>
                    
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="others"
                        name="secondUserGender"
                        onChange={inputChange}
                        checked={data.secondUserGender==="others"}
                    /> <label htmlFor=""> Others</label><br/>

                    <label htmlFor="" className='dateofbirthcss'><FontAwesomeIcon icon={faCalendarDays} />  Date of Birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                        name="secondUserDob"
                        onChange={inputChange}
                        value={!data.secondUserDob===""?"":data.secondUserDob}

                    />
                    <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} />  NID/Birth Registration No</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="secondUserNid"
                        onChange={inputChange}
                        value={!data.secondUserNid===""?"":data.secondUserNid}

                    />
                    <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="secondUserTShirt"
                        onChange={inputChange}
                        value={!data.secondUserTShirt===""?"":data.secondUserTShirt}

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
                        name="secondUserId"
                        onChange={inputChange}
                    />
                    {
                        data.secondUserId?(
                            <div className='photoSelect'>Your Uploaded File is : {data.secondUserId.name}</div>
                        ):(
                            <div className='photoSelect'>Please select a photo</div>
                        )
                    }
                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faImage} />   Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="secondUserPhoto"
                        onChange={inputChange}
                    />
                    {
                        data.secondUserPhoto?(
                            <div className='photoSelect'>Your Uploaded File is : {data.secondUserPhoto.name}</div>
                        ):(
                            <div></div>
                        )
                    }
                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={firstCall}><FontAwesomeIcon icon={faAnglesLeft} /> Back</Button>
                    <Button className="nextBtn2" onClick={thirdCall}><FontAwesomeIcon icon={faAnglesRight} /> Next</Button>
                </div>
            </Row>
        </div>
    );
}

export default SecondContestant;