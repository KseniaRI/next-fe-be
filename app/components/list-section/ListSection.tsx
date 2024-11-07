'use client';

import dynamic from 'next/dynamic';
import ContactBtn from '../contact-btn/ContactBtn';
import { StyledContainer, StyledSection, StyledTitle } from '../shared.styled';
import { ListWrap } from './ListSection.styled';
const ItemsList = dynamic(() => import('./ItemsList'));

export default function ListSection() {
    return (
        <StyledSection $background="#fff">
            <StyledContainer>
                <ListWrap>
                    <StyledTitle as="h2">Also very important title</StyledTitle>
                    <ItemsList />
                    <ContactBtn />
                </ListWrap>
            </StyledContainer>
        </StyledSection>
    );
}
