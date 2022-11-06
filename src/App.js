import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/MainSection/Home/Home'
import UpComingTours from './components/MainSection/UpComingTours/UpComingTours'
import TourAgencies from './components/MainSection/TourAgencies/TourAgencies'
import RecentEvents from './components/MainSection/RecentEvents/RecentEvents'
import Timeline from './components/MainSection/Profile/Timeline'
import About from './components/MainSection/Profile/About'
import Followers from './components/MainSection/Profile/Followers'
import Following from './components/MainSection/Profile/Following'
import CreateAgency from './components/MainSection/CreateAgency/CreateAgency'
import MyAgency from './components/MainSection/MyAgency/MyAgency'
import Settings from './components/MainSection/Settings/Settings'
import Navigation from './components/Navigation/Navigation';
import Notifications from './components/Notifications/Notifications'
import Signup from './components/SignUp/Signup';
import SignIn from './components/SignIn/SignIn';
import ForgetPass from './components/ForgetPass/ForgetPass';
import PrivateRoute from './routes/PrivateRoute';
import UpComingTourDetails from './components/MainSection/UpComingTours/UpComingTourDetails';
import ProfileLayout from './layout/ProfileLayout';
import ProfileSettings from './components/MainSection/Profile/ProfileSettings';

function App() {

  const tripRouter = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute><Main></Main></PrivateRoute>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('JSON/fakePosts.json');
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => {
            return fetch('JSON/fakePosts.json');
          },
          element: <Home></Home>
        },
        {
          path: '/upcoming-tours',
          /* loader: async () => {
            return fetch('http://localhost:5000/upcomingTours');
          }, */
          element: <UpComingTours></UpComingTours>
        },
        {
          path: '/tour-details/:id',
          loader: async ({params}) => {
            return fetch(`http://localhost:5000/upcomingTours/${params.id}`)
          },
          element: <UpComingTourDetails></UpComingTourDetails>
        },
        {
          path: '/tour-agencies',
          element: <TourAgencies></TourAgencies>
        },
        {
          path: '/recent-event',
          element: <RecentEvents></RecentEvents>
        },
        {
          path: '/profile',
          element: <ProfileLayout></ProfileLayout>,
          children: [
            {
              path: '/profile/timeline',
              element: <Timeline></Timeline>
            },
            {
              path: '/profile/about',
              element: <About></About>
            },
            {
              path: '/profile/followers',
              element: <Followers></Followers>
            },
            {
              path: '/profile/following',
              element: <Following></Following>
            }
          ]
        },
        {
          path: '/create-agency',
          element: <CreateAgency></CreateAgency>
        },
        {
          path: '/my-agency',
          element: <MyAgency></MyAgency>
        },
        {
          path: '/settings',
          element: <Settings></Settings>
        },
        {
          path: '/profile-settings',
          element: <ProfileSettings></ProfileSettings>
        },
        {
          path: '/menu',
          element: <Navigation></Navigation>
        },
        {
          path: '/notification',
          element: <Notifications></Notifications>
        }

      ]
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },
    {
      path: '/forget-password',
      element: <ForgetPass></ForgetPass>
    },
    {
      path: '*',
      element: <h1>404 not found</h1>
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
