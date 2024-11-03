import styled from 'styled-components';
import Link from 'next/link';

export const StyledNextLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 110px;
    height: 31px;
    background-color: #1e1e1e;
    color: #fff;
    cursor: pointer;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        opacity: 0.75;
    }

    @media screen and (min-width: 768px) {
        width: 177px;
    }
`;
