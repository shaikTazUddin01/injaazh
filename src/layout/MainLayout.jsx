import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default MainLayout;