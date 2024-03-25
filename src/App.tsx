
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import OrderFlowers from "./Components/OrderFlowers";
import Login from "./Components/Login";
import NavBarLogin from "./Components/NavBarLogin.tsx";
function App() {
    const router = createBrowserRouter([
        {

            children: [
                { path: '/', element:<><Login/><LayoutLogin/></> },
                { path: 'order-flowers', element: <><OrderFlowers /><Layout/></> },

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

function LayoutLogin() {
    return (
        <>
            <NavBarLogin />
            <Outlet /> {/* Child routes will render here */}
        </>
    );
}





export default App;
