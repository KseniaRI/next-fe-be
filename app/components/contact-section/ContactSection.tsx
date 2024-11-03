'use client';

import ContactBtn from '../contact-btn/ContactBtn';
import { StyledContainer, StyledSection, StyledTitle } from '../shared.styled';
import { ContactSectionWrap } from './ContactSection.styled';

export default function ContactSection() {
    return (
        <StyledSection $background="#f5f5f5">
            <StyledContainer>
                <ContactSectionWrap>
                    <StyledTitle>Less important title</StyledTitle>
                    <ContactBtn />
                </ContactSectionWrap>
            </StyledContainer>
        </StyledSection>
    );
}
