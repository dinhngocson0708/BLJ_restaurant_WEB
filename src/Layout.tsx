
import type { ReactNode } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeaderMenu from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ScrollToTop from './Component/ScrollButton';





export type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <HeaderMenu />
            {children}
            <br></br>
            <Footer />
            <ScrollToTop/>
            
        </>
    )
}
export default Layout;