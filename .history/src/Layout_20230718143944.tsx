
import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeaderMenu from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ScrollButton from './Component/ScrollButton';



export type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <HeaderMenu />
            {children}
            <Footer />
            
        </>
    )
}
export default Layout;