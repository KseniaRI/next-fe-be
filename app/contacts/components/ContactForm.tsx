import { Form } from 'antd';
import { SubmitAction } from '@/types';
import { StyledTitle } from '@/components/shared.styled';
import {
    StyledInput,
    FormWrap,
    StyledForm,
    StyledTextArea,
} from './Contacts.styled';
import SubmitButton from './SubmitBtn';

export default function ContactForm({ onSubmit }: SubmitAction) {
    const [form] = Form.useForm();

    return (
        <FormWrap>
            <StyledTitle as="h1">Contact us</StyledTitle>
            <StyledForm>
                <Form
                    form={form}
                    onFinish={values => {
                        onSubmit(values, form);
                    }}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <StyledInput />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: 'email' }]}
                    >
                        <StyledInput />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true }]}
                    >
                        <StyledTextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <SubmitButton form={form}>Submit</SubmitButton>
                    </Form.Item>
                </Form>
            </StyledForm>
        </FormWrap>
    );
}
