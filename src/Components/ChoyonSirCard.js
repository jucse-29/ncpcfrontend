// ChoyonSirCard.js
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";

function ChoyonSirCard({ choyon }) {
    const [css, setCss] = useState({
        sirWidth: 'choyonSir',
        teacherDescription: 'teacherDescription'
    });

    const changeDes = () => {
        const updatedCss = {
            sirWidth: css.sirWidth === 'choyonSir' ? 'choyonSirWidth' : 'choyonSir',
            teacherDescription: css.teacherDescription === 'teacherDescription' ? 'teacherDescriptionShow' : 'teacherDescription'
        };
        setCss(updatedCss);
    };

    return (
       <Fragment>
           <Card className={css.sirWidth} onClick={changeDes}>
               <Card.Body>
                   <img className="cardImg" src={choyon} alt="af" />
                   <Card.Title className="title">Choyon Sir</Card.Title>
                   <Card.Text>
                       <h5 className="subTitle">Professor</h5>
                       <p className={css.teacherDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores aspernatur, consequatur consequuntur deserunt dolor doloribus ducimus eius eligendi esse ipsum iure laborum minima odio, reprehenderit sunt, ullam ut vero?</p>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default ChoyonSirCard;
