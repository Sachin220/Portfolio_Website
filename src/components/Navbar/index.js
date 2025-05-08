import React from "react";
import { 
    Nav, 
    NavLink, 
    NavContainer, 
    Span, 
    NavLogo, 
    NavItems, 
    GitHubButton, 
    ButtonContainer, 
    MobileIcon, 
    MobileMenu, 
    MobileNavLogo, 
    MobileLink 
} from './NavbarStyledComponents';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import styled, { useTheme } from "styled-components";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: "white",
                        marginBottom: '20px', 
                        cursor: 'pointer',
                        textDecoration: 'none',
                    }}>
                        <DiCssdeck size="3rem" />
                        <Span>Portfolio</Span>
                    </a>
                </NavLogo>

                <MobileIcon onClick={() => setOpen(!open)}>
                    <FaBars size="24px" color="white" />
                </MobileIcon>

                <NavItems>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/skill">Skills</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/certificates">Certificates</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/education">Education</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </NavItems>

                <ButtonContainer>
                    <GitHubButton href={Bio.github} target="_blank">
                        Github Profile
                    </GitHubButton>
                </ButtonContainer>
            </NavContainer>

            {/* Mobile Menu */}
            <MobileMenu isOpen={open}>
                <MobileLink to="/" onClick={() => setOpen(false)}>
                    About
                </MobileLink>

                <MobileLink to="/skill" onClick={() => setOpen(false)}>
                    Skills
                </MobileLink>

                <MobileLink to="/experience" onClick={() => setOpen(false)}>
                    Experience
                </MobileLink>

                <MobileLink to="/projects" onClick={() => setOpen(false)}>
                    Projects
                </MobileLink>

                <MobileLink to="/education" onClick={() => setOpen(false)}>
                    Education
                </MobileLink>

                <MobileLink to="/contact" onClick={() => setOpen(false)}>
                    Contact
                </MobileLink>

                <GitHubButton
                    style={{
                        padding: '10px 16px',
                        background: theme.primary,
                        color: 'white',
                        width: 'max-content',
                        marginTop: '12px',
                    }}
                    href={Bio.github}
                    target="_blank"
                >
                    Github Profile
                </GitHubButton>
            </MobileMenu>
        </Nav>
    );
};

export default Navbar;
