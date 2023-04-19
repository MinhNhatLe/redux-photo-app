import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import "./Header.scss"

Header.propTypes = {

};

function Header() {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs="auto">
                        <a
                            className='header__link header__title'
                            href="https://www.facebook.com/Nhat.sun.1005/"
                            target='_blank'
                            rel='nooperner noreferrer'
                        >
                            Nhật Lê
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            {/* <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-lg-6'>
                        <a
                            className='header__link header__title'
                            href="https://www.facebook.com/Nhat.sun.1005/"
                            target='_blank'
                            rel='nooperner noreferrer'
                        >
                            Nhật Lê
                        </a>
                    </div>

                    <div className='col-lg-6'>
                        <NavLink
                            exact
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink>
                    </div>
                </div>
            </div> */}
        </header >
    );
}

export default Header;