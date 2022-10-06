import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/MainSection/Home/Home'
import UpComingTours from './components/MainSection/UpComingTours/UpComingTours'
import TourAgencies from './components/MainSection/TourAgencies/TourAgencies'
import RecentEvent from './components/MainSection/RecentEvent/RecentEvent'
import Profile from './components/MainSection/Profile/Profile'
import CreateAgency from './components/MainSection/CreateAgency/CreateAgency'
import MyAgency from './components/MainSection/MyAgency/MyAgency'
import Settings from './components/MainSection/Settings/Settings'
import LogOut from './components/MainSection/LogOut/LogOut'

function App() {

  const tripRouter = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader : async() => {
            return fetch('fakePosts.json');
          },
          element: <Home></Home>
        },
        { 
          path: '/home', 
          loader : async() => {
            return fetch('fakePosts.json');
          },
          element: <Home></Home> 
        },
        { path: '/upcoming-tours', element: <UpComingTours></UpComingTours> },
        { path: '/tour-agencies', element: <TourAgencies></TourAgencies> },
        { path: '/recent-event', element: <RecentEvent></RecentEvent> },
        { path: '/profile', element: <Profile></Profile> },
        { path: '/create-agency', element: <CreateAgency></CreateAgency> },
        { path: '/my-agency', element: <MyAgency></MyAgency> },
        { path: '/settings', element: <Settings></Settings> },
        { path: '/logout', element: <LogOut></LogOut> }
      ]
    },
    {
      path: '*', element: <h1>404 not found</h1>
    }
  ])



  return (
    <div>
      {/* <Test></Test> */}
      <RouterProvider router={tripRouter}></RouterProvider>
    </div>
  );
}

export default App;
