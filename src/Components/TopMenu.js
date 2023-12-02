import React, {Fragment, useEffect, useState} from 'react';
import {Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo1 from '../Assets/Images/juLogo.jpg';

function TopMenu(props) {
    const [isScroll,setIsScroll] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [css,setCss] = useState({
        navBar:'navBar',
        navLink:'navLink',
        nabBrand:'navBrand',
        logo:logo1
    })

    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY>65){
                setIsScroll(true);
            }
            else{
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll',handleScroll);
        return window.addEventListener('scroll',handleScroll);
    },[]);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };


    return (
        <Fragment>
           <Container fluid="true" className="text-center">
               <Navbar className={isScroll?'navBarScroll':'navBar'}  collapseOnSelect expand="sm">
                   <Navbar.Toggle className="hIcon" aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse  className="justify-content-center" id="responsive-navbar-nav">
                       <Nav className="nav">
                           <Nav.Link ><Link to="/" className={css.navLink} >Home</Link></Nav.Link>
                           <Nav.Link ><Link to="/"  className={css.navLink} >About</Link></Nav.Link>
                           <Nav.Link ><Link to="registration"  className={css.navLink} >Registration</Link></Nav.Link>
                           
                           <Dropdown
                               as={Nav.Item}
                               onMouseEnter={handleMouseEnter}
                               onMouseLeave={handleMouseLeave}
                               show={dropdownOpen}
                               className="ddMenu"
                           >
                               <Dropdown.Toggle className={css.navLink}  as={Nav.Link} id="dropdown-basic">Committee</Dropdown.Toggle>
                               <Dropdown.Menu className="ddBox">
                                   <Dropdown.Item className={css.navLink} as={Link} to="committee">Executive Committee</Dropdown.Item>
                                   <Dropdown.Item className={css.navLink} as={Link} to="/">IT Committee</Dropdown.Item>
                                   <Dropdown.Item className={css.navLink} as={Link} to="/">Social Media</Dropdown.Item>
                               </Dropdown.Menu>
                           </Dropdown>
                           <Nav.Link><Link to="gallery"  className={css.navLink} >Gallery</Link></Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
            
              {/* AN */}
              <marquee className="mar" behavior="" direction="" scrollamount="3" >|  NCPC 2023  |  Department of Computer Science and Engineering  |  Jahangirnagar University  |</marquee>
           {/* AN */}
           </Container>
        </Fragment>
    );
}

export default TopMenu;