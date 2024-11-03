import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Some company',
    description: 'Some company test',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <AntdRegistry>
                        <Header />
                        {children}
                        <Footer />
                    </AntdRegistry>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
