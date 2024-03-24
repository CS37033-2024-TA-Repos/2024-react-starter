import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./Components/NavBar.tsx";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <div />,
            element: <Root />,
            children: [
                {
                    path: "",
                    element: <div>
                        put routes here
                    </div>
                },
            ],
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>
    function Root() {
        return (
            <div className="w-full flex flex-col px-20 gap-5">
                <h1>Welcome to your starter code.</h1>
                <NavBar />
            </div>
        );
    }
}

export default App
