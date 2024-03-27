
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import OrderFlowers from "./Components/OrderFlowers";
import OrderPayment from './Components/OrderPayment';
import DisplayFormData from './Components/DisplayFormData.tsx';
import { FormDataProvider } from './Components/FormDataContext.tsx';
import OrderFlowersResult from "./Components/OrderFlowersResult.tsx"
import FloorMap from "./Components/FloorMap.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <Welcome /> },
                { path: 'order-flowers', element: <OrderFlowers /> },
                { path: 'payment-info', element: <OrderPayment /> },
                { path: 'display-data', element: <DisplayFormData /> },
                { path: 'order-flowers-result', element: <OrderFlowersResult /> },
                { path: 'floor-map', element: <FloorMap />}
                // New route for payment info
                // ... other routes
            ],
        },
    ]);

    return (<FormDataProvider> {/* Wrap RouterProvider with FormDataProvider for FlowerOrders data */}
        <RouterProvider router={router} />
    </FormDataProvider>
    )
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
