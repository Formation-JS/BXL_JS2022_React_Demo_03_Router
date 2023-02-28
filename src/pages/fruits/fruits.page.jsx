import { Outlet } from 'react-router-dom';

const FruitsPage = () => {

    return (
        <>
            <h1>Fruits</h1>

            <Outlet />
        </>
    );
};

export default FruitsPage;