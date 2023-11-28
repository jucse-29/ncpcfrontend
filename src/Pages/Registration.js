import React, {Fragment,useState} from 'react';
import '../Assets/CSS/Registration.css';
import RegiForm from "../Components/RegiForm";
import FormContext from "../Components/Context/FormContext";

function Registration(props) {

    const [first,setFirst] = useState(true);
    const [second,setSecond] = useState(false);
    const [third,setThird] = useState(false);
    const [fourth,setFourth] = useState(false);

    const [data,setData] = useState({
        teamName:"",
        instituteName:"",
        firstUserName1:"",
        firstUserName2:"",
        firstUserEmail:"",
        firstUserPhone:"",
        firstUserGender:"",
        firstUserDob:"",
        firstUserNid:"",
        firstUserTShirt:"",
        firstUserId:null,
        firstUserPhoto:null,

        secondUserName1:"",
        secondUserName2:"",
        secondUserEmail:"",
        secondUserPhone:"",
        secondUserGender:"",
        secondUserDob:"",
        secondUserNid:"",
        secondUserTShirt:"",
        secondUserId:null,
        secondUserPhoto:null,

        thirdUserName1:"",
        thirdUserName2:"",
        thirdUserEmail:"",
        thirdUserPhone:"",
        thirdUserGender:"",
        thirdUserDob:"",
        thirdUserNid:"",
        thirdUserTShirt:"",
        thirdUserId:null,
        thirdUserPhoto:null,

        teacherName1:"",
        teacherName2:"",
        teacherDesignation:"",
        teacherEmail:"",
        teacherPhone:"",
        teacherGender:"",
        teacherNid:"",
        teacherTShirt:"",
        teacherId:null,
        teacherPhoto:null
    });

    return (
        <Fragment>
           <FormContext.Provider value={{data,setData,first,setFirst,second,setSecond,third,setThird,fourth,setFourth}}>
               <RegiForm/>
           </FormContext.Provider>
        </Fragment>
    );
}

export default Registration;
