import { useEffect, useState } from 'react';
import { Button, Form } from 'antd';
import { SubmitButtonProps } from '@/types';

export default function SubmitButton({ form, children }: SubmitButtonProps) {
    const [submittable, setSubmittable] = useState<boolean>(false);

    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
        <Button
            color="default"
            variant="solid"
            htmlType="submit"
            disabled={!submittable}
        >
            {children}
        </Button>
    );
}
