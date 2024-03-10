import { Outlet } from 'react-router-dom';
import Navbar from '../component/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default MainLayout;