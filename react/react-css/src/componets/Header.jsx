import React from "react";
import { NavLink } from "react-router-dom"; // Importação do NavLink
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: blueviolet;
    padding: 0 60px;
    border: 5px solid black;
    align-items: center;
    justify-content: space-between;
    display:flex;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: white;
    }
    & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;

        & li a{
            color: #FFFFFF80;
            text-decoration:none;
            font-size: 18px;

            &:hover, &.active{
                color: white;
            }
        }
    }
    `
;

const Nav = styled.nav`
    display: flex; /* Corrigido o erro de digitação */
    justify-content: center;
    gap: 20px;
`;

const StyledLink = styled(NavLink)`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;

    &:hover,
    &.active {
        color: white;
        text-decoration: underline;
    }
`;

const Header = () => {
    return ( 
        <HeaderContainer>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>

                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}
 
export default Header;
