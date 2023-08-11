
import type { ReactNode } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeaderMenu from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ScrollToTop from './Component/ScrollButton';
import Footers from './demo/Footer';

export type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Footers name="Sơn" id="1"/>
            <HeaderMenu />
            {children}
            <Footer />
            <ScrollToTop/>
            
        </>
    )
}
export default Layout;