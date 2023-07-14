import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faBars,
    faCubes,
    faInfoCircle,
    faList,
    faPlusCircle,
    faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-bootstrap";

function Shell({name, children}) {

    const menuItems = [
        {
            'icon': faList,
            'title': 'App Details',
            'href': '/app-details'
        },
        {
            'icon': faProjectDiagram,
            'title': 'App Scoring',
            'href': '/app-scoring'
        }
    ]

    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md bg-white fixed-top" id={"topNavbar"}>
                <button
                    id="toggle-sidebar-btn"
                    type="button"
                    className="d-block d-md-none btn btn-outline-secondary "
                    aria-expanded="false"
                >
                    <span className="sr-only">Toggle sidepanel</span>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <button
                    className="btn btn-outline-secondary d-block d-md-none"
                    id="toggle-nav-btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mainNavExample1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faAngleDown}/>
                </button>

                <div className="collapse navbar-collapse" id="main-nav">
                    <h4 className="navbar-text">{name}</h4>
                    <ul className="navbar-nav ml-auto">
                        <li className={"align-items-center border-left-0"}>
                            <div className='support-button ml-auto'>
                                <Button href={'/build'} variant="outline-primary" className={'icon-text ml-auto'}>
                                    <i>
                                        <FontAwesomeIcon icon={faInfoCircle}/>
                                    </i>
                                    <div>
                                        Ask for support
                                    </div>
                                </Button>
                            </div>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <UserInfo/>*/}
                        {/*</li>*/}
                    </ul>

                    <ul className="navbar-nav"/>
                </div>
            </nav>
            <div className="main-container" id="main-container">
                <div className="main-container-inner">

                    <Sidebar menuItems={menuItems}/>

                    <div className="main-content">
                        <div className="page-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shell;
