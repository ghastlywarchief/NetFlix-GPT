import { createBrowserRouter, Outlet} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import Body from './components/Body';
import { Provider, useDispatch } from 'react-redux';
import UserStore from './utils/UserStore';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import Browse from './components/Browse';

function App() {

  return (
    <Provider store={UserStore}>
        <div>
          <Header/>
          <Outlet/>
        </div>
    </Provider>
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
      {
        path: "/browse",
        element: <Browse/>
      }
    ]
  }
  
]);

export default App;
