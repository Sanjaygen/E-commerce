"use client"
import { ReactNode} from 'react';
import { LayoutContainer } from './Layout.styled';
import { Header } from './helper-components/header/Header';
import { Footer } from './helper-components/footer/Footer';

export type LayoutProps = {
    children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {


    return (
        <LayoutContainer>
              <Header/>
                {children}
                <Footer/>
        </LayoutContainer>
    );
};

export default DashboardLayout;
