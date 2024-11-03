'use client';

import ContactBtn from '../contact-btn/ContactBtn';
import LogoTitle from '../logo-title/LogoTitle';
import { StyledContainer } from '../shared.styled';
import { HeaderContainer, StyledHeader } from './Header.styled';

export default function Header() {
    return (
        <StyledHeader>
            <StyledContainer>
                <HeaderContainer>
                    <LogoTitle />
                    <ContactBtn />
                </HeaderContainer>
            </StyledContainer>
        </StyledHeader>
    );
}
