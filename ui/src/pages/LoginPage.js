import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 600px;
    padding: 16px;
    margin: 40px auto 0;
    text-align: left;
    background-color: #fafafa;
    border-radius: 2px;
`;

const StyledLink = styled(Link)`
    width: 100%;
    background-color: #9c27b0;
    border: none;
    border-radius: 2px;
    color: #fff;
    height: 22px;
    display: inline-block;
    text-align: center;
    padding: 11px;
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
`;

class LoginPage extends React.Component {
    render() {
        return ( 
            <Container>
                <h1>This is login page</h1>
                <h2>login functionality not available, go to register</h2>
                <StyledLink to="/register">Register</StyledLink>
            </Container>
        );
    }
}

export default LoginPage;