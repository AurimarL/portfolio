'use client';
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header() {
    const Data = ['Skills', 'Projetos'];

    return (
        <Navbar bg="white" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="#Home">
                    <p className="text-3xl">
                        {'< '}Aurimar{' />'}
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                    <Nav className=" justify-content-end gap-2">
                        {Data.map((name, i) => {
                            return (
                                <Link key={i} href={`#${name}`}>
                                    <p className="text-3xl">{name}</p>
                                </Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
