import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface DefaultTemplateProps {
    children: ReactNode;
}

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
};

