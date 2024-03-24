
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import OrderFlowers from "./Components/OrderFlowers";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Welcome /> },
                { path: 'order-flowers', element: <OrderFlowers /> },
                // ... other routes
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet /> {/* Child routes will render here */}
        </>
    );
}

function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome to your starter code.</h1>
        </div>
    );
}

export default App;
