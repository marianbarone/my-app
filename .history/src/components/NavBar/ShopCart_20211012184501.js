import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import { RiShoppingBag3Line } from 'react-icons/ri';
import {LinkContainer} from 'react-router-bootstrap';


const ShopCart = () => {
    return (
        <>
        <LinkContainer to="/Cart">
            <Nav.Link><RiShoppingBag3Line /></Nav.Link>
        </LinkContainer>
        </>
    )

}

export default ShopCart;
