'use client';

import dynamic from 'next/dynamic';
import { HeroWrap, TextWrap } from './Hero.styled';
import {
    StyledContainer,
    StyledSection,
    StyledText,
    StyledTitle,
} from '../shared.styled';
const VideoFrame = dynamic(() => import('./VideoFrame'));

export default function Hero() {
    return (
        <StyledSection $background="#f5f5f5">
            <StyledContainer>
                <HeroWrap>
                    <TextWrap>
                        <StyledTitle as="h1">
                            Most important title on the page
                        </StyledTitle>
                        <StyledText $color="#1e1e1e">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam mattis, leo et condimentum ultricies,
                            sem urna convallis metus, vel suscipit nibh lacus
                            tincidunt ante
                        </StyledText>
                    </TextWrap>
                    <VideoFrame />
                </HeroWrap>
            </StyledContainer>
        </StyledSection>
    );
}
