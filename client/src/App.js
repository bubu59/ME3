import styled from "styled-components"
import Login from "./pages/login"
import Home from "./pages/home"
import Register from "./pages/register"
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
])

const Container = styled.div``

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
