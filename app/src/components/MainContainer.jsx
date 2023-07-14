import React from 'react';
import { Container } from 'react-bootstrap';
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";


export default function MainContainer() {
    return (
        <Container fluid>
            <Topbar />
            <Sidebar />

        </Container>
    );
}