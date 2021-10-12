import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import { RiShoppingBag3Line } from 'react-icons/ri';


const ShopCart = () => {
    return (
        <>
        <Nav.Link href="#Cart"><RiShoppingBag3Line /></Nav.Link>
        </>
    )

}

export default ShopCart;
