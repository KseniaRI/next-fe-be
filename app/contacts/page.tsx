'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FormInstance, Result } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import ContactForm from './components/ContactForm';
import { ContactsWrap } from './components/Contacts.styled';
import { StyledContainer, StyledSection } from '@/components/shared.styled';
import { FormValues } from '@/types';

export default function Contacts() {
    const [responseMessage, setResponseMessage] = useState('');

    const onSubmit = async (values: FormValues, form: FormInstance) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();
            setResponseMessage(data.message);
            form.resetFields();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const pageContent = responseMessage ? (
        <Result
            status="success"
            title={responseMessage}
            extra={[
                <Link key="home" href="/">
                    <HomeOutlined />
                    <p>Go to the home page</p>
                </Link>,
            ]}
        />
    ) : (
        <ContactForm onSubmit={onSubmit} />
    );
    return (
        <main>
            <StyledSection $background="#f5f5f5">
                <StyledContainer>
                    <ContactsWrap>{pageContent}</ContactsWrap>
                </StyledContainer>
            </StyledSection>
        </main>
    );
}
