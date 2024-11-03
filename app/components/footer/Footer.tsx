'use client';

import LogoTitle from '../logo-title/LogoTitle';
import { StyledContainer } from '../shared.styled';
import { FooterWrap, StyledFooter, StyledYear } from './Footer.styled';

export default function Footer() {
    return (
        <StyledFooter>
            <StyledContainer>
                <FooterWrap>
                    <LogoTitle />
                    <StyledYear>2024</StyledYear>
                </FooterWrap>
            </StyledContainer>
        </StyledFooter>
    );
}
