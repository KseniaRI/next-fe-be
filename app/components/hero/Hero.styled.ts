import styled from 'styled-components';

export const HeroWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 90px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        padding-left: 30px;
    }
`;

export const VideoWrap = styled.div`
    width: 340px;
    @media screen and (min-width: 768px) {
        width: 530px;
    }
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 380px;
    }
`;
