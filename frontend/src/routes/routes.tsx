import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";
import Home from "../pages/Home";

const routes = [
  //   { path: "/watch/product/:id", element: <SingleProduct />, id: 1 },
  //   { path: "/laptop/product/:id", element: <SingleProduct />, id: 2 },
  //   { path: "/phone/product/:id", element: <SingleProduct />, id: 3 },
  //   { path: "/product/:id", element: <SingleProduct />, id: 4 },
  //   { path: "/interests", element: <Interests />, id: 11 },
  //   { path: "/cart", element: <Cart />, id: 5 },
  //   { path: "/login", element: <Login />, id: 6 },
  //   { path: "/laptop", element: <Laptop />, id: 7 },
  //   { path: "/watch", element: <Watch />, id: 8 },
  //   { path: "/phone", element: <Phone />, id: 9 },
  { path: "/", element: <Home />, id: 10 },
  { path: "/signup", element: <SignUp />, id: 11 },
  { path: "/login", element: <Login />, id: 12 },
];

export default routes;
