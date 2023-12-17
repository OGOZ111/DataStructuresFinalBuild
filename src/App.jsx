import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Merge from "./routes/Merge";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Bubble from "./routes/Bubble";
import Insert from "./routes/Insert";
import Stack from "./routes/Stack";
import Queue from "./routes/Queue";
import Palindrome from "./routes/Palindrome";
import Quick from "./routes/Quick";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/palindrome", element: <Palindrome /> },
        { path: "/merge", element: <Merge /> },
        { path: "/insert", element: <Insert /> },
        { path: "/bubble", element: <Bubble /> },
        { path: "/quick", element: <Quick /> },
        { path: "/queue", element: <Queue /> },
        { path: "/stack", element: <Stack /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
