import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        padding-left: 60px;
        padding-right: 60px;
    }
`;

export const StyledTitle = styled.div`
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #0c0c0d;

    @media screen and (min-width: 768px) {
        font-size: 48px;
    }
`;

export const StyledText = styled.p<{ $color?: string }>`
    color: ${props => props.$color};
    font-size: 16px;
`;

export const StyledSection = styled.section<{ $background?: string }>`
    background: ${props => props.$background};
`;
