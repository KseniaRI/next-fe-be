import styled from 'styled-components';
import { Input } from 'antd';

export const ContactsWrap = styled.div`
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const StyledForm = styled.div`
    width: 320px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    padding: 20px;
    background-color: #fff;
`;

export const StyledInput = styled(Input)`
    &:hover,
    &:focus {
        border-color: #0c0c0d !important;
    }
`;

export const StyledTextArea = styled(Input.TextArea)`
    &:hover,
    &:focus {
        border-color: #0c0c0d !important;
    }
`;
