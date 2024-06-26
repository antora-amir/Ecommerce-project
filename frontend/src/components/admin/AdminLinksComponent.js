import { Navbar, NavLink,Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const AdminLinksComponent = () => {
    return (
        <Navbar bg="light" variant="light">
        <Nav className="flex-column">
            <LinkContainer to="/adminorderspage">
                <NavLink>Orders</NavLink>
            </LinkContainer>

            <LinkContainer to="/adminproductspage">
                <NavLink>Products</NavLink>
            </LinkContainer>

            <LinkContainer to="/adminuserpage">
                <NavLink>Users List</NavLink>
            </LinkContainer>
            <LinkContainer to="/adminchatspage">
                <NavLink>Chats</NavLink>
            </LinkContainer>
            <LinkContainer to="/adminanalyticspage">
                <NavLink>Analytics</NavLink>
            </LinkContainer>
            <LinkContainer to="/admin/logout">
                <NavLink>Logout</NavLink>
            </LinkContainer>
        </Nav>
        </Navbar>

    )
}
export default AdminLinksComponent; 