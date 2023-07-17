
import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



export type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            {/* <Header/> */}
            {children}
            {/* <Footer/> */}
        </>
    )
}
export default Layout;