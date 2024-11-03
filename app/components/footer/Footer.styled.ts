import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: sticky;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
`;

export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 80px;
    padding-bottom: 80px;
`;

export const StyledYear = styled.span`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
`;
