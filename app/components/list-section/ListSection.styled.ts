import styled from 'styled-components';
import { Col } from 'antd';

export const ListWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 60px;
    padding-bottom: 40px;
`;

export const ListItem = styled(Col)`
    width: 200px;
`;

export const ListItemTitle = styled.h4`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 15px;
    color: #1e1e1e;
`;
