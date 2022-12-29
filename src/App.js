import './App.css';
import Navbar from './components/Navbar';
import Redeem from './components/About';
import Footer from './components/footer';
import Caro from './components/Caro';
import Lobbycaro from './components/Lobbycaro';
import { RouterProvider,createBrowserRouter, BrowserRouter , Routes, Route, Form } from 'react-router-dom';
import Flapbird from './components/Flapbird';
import Lobbyflapbird from './components/Lobbyflapbird';
import Bubbles from './components/Bubbles';
import Lobbybubble from './components/Lobbybubble';
import Goldegg from './components/Goldegg';
import Lobbygoldegg from './components/Lobbygoldegg';
import Therock from './components/Therock';
import Lobbytherock from './components/Lobbytherock';

const router = createBrowserRouter([
  {
    path: "/caro",
    element: <Caro />,
  },
  {
    path: "/lobbycaro",
    element: <Lobbycaro />,
  },
  {
    path: "/flapbird",
    element: <Flapbird />,
  },
  {
    path: "/lobbyflapbird",
    element: <Lobbyflapbird />,
  },
  {
    path: "/bubbles",
    element: <Bubbles />,
  },
  {
    path: "/lobbybubble",
    element: <Lobbybubble />,
  },
  {
    path: "/goldegg",
    element: <Goldegg />,
  },
  {
    path: "/lobbygoldegg",
    element: <Lobbygoldegg />,
  },
  {
    path: "/therock",
    element: <Therock />,
  },
  {
    path: "/lobbytherock",
    element: <Lobbytherock />,
  },
]);


function App() {
  return (
    <>
    
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Redeem />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  );
}

export default App;
