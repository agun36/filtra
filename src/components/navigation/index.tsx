import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import logo from '@/assets/images/Filetra_logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import open from '@/assets/images/open.svg';
import './styles.scss';
import { useState } from 'react';

export const Navigation = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div >
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt='showing star' /></NavLink>
                </div>

                {show ?
                    <FontAwesomeIcon icon={faTimes} className="hamburger d-block d-md-none" onClick={() => setShow(false)} />
                    :
                    <div onClick={() => setShow(true)} className='d-block d-md-none hamburger-wrapper'>
                        <img src={open} alt="open icon " className='hamburger' />
                    </div>
                }

                <div className="d-none d-md-flex gap-2 ">
                    <Nav className='d-md-flex gap-2'>
                        <Nav.Item >
                            <NavLink className="nav-link btn btn-outline-bg-200  text-bg-200 border" to='/login'>Customer Sigin</NavLink>
                        </Nav.Item>
                        <Nav.Item >
                            <NavLink className="nav-link btn bg-bg-200 text-bg-500" to='/signup'>Customer Sign Up</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>

                <div className={`offcanvas offcanvas-end ${show ? 'show' : ''} d-md-none`} data-bs-scroll="true" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className='offcanvas-header font-size-large fs-5'>
                        <FontAwesomeIcon icon={faTimes} className="hamburger ms-auto " onClick={() => setShow(false)} />
                    </div>
                    <div className='offcanvas-body mt-8 '>
                        <Nav className="flex-column align-items-start ps-5 justify-content-end ">
                            <Nav.Item className='w-100 mb-4' >
                                <NavLink className="nav-link btn btn-outline-bg-200  text-bg-200 border py-3" to='/login'>Customer Sigin</NavLink>
                            </Nav.Item>
                            <Nav.Item className='w-100'>
                                <NavLink className="nav-link btn bg-bg-200 text-bg-500 py-3" to='/signup'>Customer Sign Up</NavLink>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </div>
        </nav>
    )
}