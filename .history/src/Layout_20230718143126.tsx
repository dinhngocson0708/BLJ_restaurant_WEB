
import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeaderMenu from './Component/Header/Header';
import Footer from './Component/Footer/Footer';



export type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <HeaderMenu />
            {children}
            <Footer />
            <Scr
        </>
    )
}
export default Layout;