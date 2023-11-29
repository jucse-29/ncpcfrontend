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

function TeacherData({thirdCall,inputChange,postDataToBackend}) {

    const {data} = useContext(FormContext);

    return (
        <div className="firstContestant mt-5">
            <hr/>
            <h4 className="title mb-4"><FontAwesomeIcon icon={faChalkboardUser} />   Coach Info</h4>
            <hr/>
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="teacherName1"
                        onChange={inputChange}
                        value={!data.teacherName1===""?"":data.teacherName1}

                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />  Last Name</label>
                    <input
                        type="text"
                        placeholder="Second Name"
                        className="form-control"
                        name="teacherName2"
                        onChange={inputChange}
                        value={!data.teacherName2===""?"":data.teacherName2}

                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="x"><FontAwesomeIcon icon={faIdCardClip} />   Designation</label>
                    <select
                        className="form-control w-25"
                        name="teacherDesignation"
                        onChange={inputChange}
                        value={!data.teacherDesignation===""?"":data.teacherDesignation}

                    >
                        <option value="">Select</option>
                        <option value="Lecturer">Lecturer</option>
                        <option value="A.Professor">Assistant Professor</option>
                        <option value="A.S.Professor">Associate Professor</option>
                        <option value="Professor">Professor</option>
                    </select>
                    <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-control"
                        name="teacherEmail"
                        onChange={inputChange}
                        value={!data.teacherEmail===""?"":data.teacherEmail}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="teacherPhone"
                        onChange={inputChange}
                        value={!data.teacherPhone===""?"":data.teacherPhone}

                    />
                    <label className='dateofbirthcss'><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        value="male"
                        name="teacherGender"
                        onChange={inputChange}
                        checked={data.teacherGender==="male"}
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="teacherGender"
                        onChange={inputChange}
                        checked={data.teacherGender==="female"}
                    /> <label htmlFor=""> Female</label><br/>

                    <label htmlFor="pp"><FontAwesomeIcon icon={faCreditCard} /> NID/Birth Registration No</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="teacherNid"
                        onChange={inputChange}
                        value={!data.teacherNid===""?"":data.teacherNid}

                    />
                    <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="teacherTShirt"
                        onChange={inputChange}
                        value={!data.teacherTShirt===""?"":data.teacherTShirt}

                    >
                        <option value="0">Select</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>

                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faAddressCard} /> Coach ID</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="teacherId"
                        onChange={inputChange}
                    />
                    {
                        data.teacherId?(
                            <div className='photoSelect'>Your Uploaded File is : {data.teacherId.name}</div>
                        ):(
                            <div className='photoSelect'>Please select a photo</div>
                        )
                    }
                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faImage} />   Coach Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="teacherPhoto"
                        onChange={inputChange}
                    />
                    {
                        data.teacherPhoto?(
                            <div className='photoSelect'>Your Uploaded File is : {data.teacherPhoto.name}</div>
                        ):(
                            <div></div>
                        )
                    }

                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={thirdCall}><FontAwesomeIcon icon={faAnglesLeft} /> Back</Button>
                </div>

                <div className="text-center">
                    <button className="submitBtn btn btn-success" onClick={postDataToBackend}>Submit</button>
                </div>
            </Row>
        </div>
    );
}

export default TeacherData;