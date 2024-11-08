import Link from 'next/link';
import { Result } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function Feedback({
    responseMessage,
}: {
    responseMessage: string;
}) {
    return (
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
    );
}
