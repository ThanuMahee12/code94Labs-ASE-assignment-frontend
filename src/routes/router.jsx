import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../Pages/Error"
import MainPage from "../Pages/MainPage";
import SearchPage from "../Pages/SearchPage";
import FavouritPage from "../Pages/FavouritPage";
import AddEditPage from "../Pages/AddEditPage";
const router=createBrowserRouter([
{
    path:"/",
    element:<MainLayout/>,
    errorElement:<Error/>,
    children:[
{
    path:"/",
    element:<MainPage/>
},
{
    path:"/search",
    element:<SearchPage/>,
},
{
    path:"/favourite",
    element:<FavouritPage/>,

},{
    path:"/edit/:productid",
    element:<AddEditPage/>
},
{
    path:"/new",
    element:<AddEditPage/>
}
    ]
}
])

export default router