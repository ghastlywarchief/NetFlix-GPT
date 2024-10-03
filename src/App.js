import { createBrowserRouter, Outlet} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import Body from './components/Body';

function App() {
  return (
        <div>
          <Header/>
          <Outlet/>
        </div>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/login",
        element: <Login />
      },
    ]
  }
  
]);

export default App;
