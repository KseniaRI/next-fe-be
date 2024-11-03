import type { FormInstance } from 'antd';
import { ReactNode } from 'react';

export interface SubmitButtonProps {
    form: FormInstance;
    children: ReactNode;
}
export interface FormValues {
    name: string;
    email: string;
    message: string;
}
export interface SubmitAction {
    onSubmit: (values: FormValues, form: FormInstance) => Promise<void>;
}

export interface ContainerType {
    children: ReactNode;
}
