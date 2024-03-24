
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import OrderFlowers from "./Components/OrderFlowers";
import OrderPayment from './Components/OrderPayment';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Welcome /> },
                { path: 'order-flowers', element: <OrderFlowers /> },
                { path: 'payment-info', element: <OrderPayment /> }, // New route for payment info
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
