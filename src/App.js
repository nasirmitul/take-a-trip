import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import AgencyTimeline from './components/MainSection/MyAgency/AgencyTimeline';
import AgencyAbout from './components/MainSection/MyAgency/AgencyAbout';
import AgencyLayout from './layout/AgencyLayout';
import AgencySettings from './components/MainSection/MyAgency/AgencySettings';
import CarouselTest from './components/Test/CarouselTest';
import ViewAgencyProfile from './components/MainSection/ViewProfile/ViewAgencyProfile/ViewAgencyProfile';
import PaymentSuccess from './components/MainSection/UpComingTours/PaymentSuccess';
import ViewUserProfileLayout from './layout/ViewUserProfileLayout';
import ViewUserTimeline from './components/MainSection/ViewProfile/ViewUserProfile/ViewUserTimeline';
import ViewUserAbout from './components/MainSection/ViewProfile/ViewUserProfile/ViewUserAbout';

function App() {

  const tripRouter = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute><Main></Main></PrivateRoute>,
      children: [
        {
          path: '/',
          /* loader: async () => {
            return fetch('http://localhost:5000/posts');
          }, */
          element: <Home></Home>
        },
        {
          path: '/home',
          /* loader: async () => {
            return fetch('http://localhost:5000/posts');
          }, */
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
          path: '/user/:email',
          element: <ViewUserProfileLayout></ViewUserProfileLayout>,
          children: [
            {
              path: '/user/:email/timeline',
              element: <ViewUserTimeline></ViewUserTimeline>
            },
            {
              path: '/user/:email/about',
              element: <ViewUserAbout></ViewUserAbout>
            }
          ]
        },




        {
          path: '/create-agency',
          element: <CreateAgency></CreateAgency>
        },
        {
          path: '/my-agency',
          element: <AgencyLayout></AgencyLayout>,
          children: [ 
            {
              path: '/my-agency/agency-timeline',
              element: <AgencyTimeline></AgencyTimeline>
            },
            {
              path: '/my-agency/agency-about',
              element: <AgencyAbout></AgencyAbout>
            }
          ]
        },
        {
          path: '/agencyProfile/:id',
          element: <ViewAgencyProfile></ViewAgencyProfile>,
          loader: async ({params}) => {
            return fetch(`http://localhost:5000/agencyProfile/${params.id}`)
          },
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
          path: '/agency-settings',
          element: <AgencySettings></AgencySettings>
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
      path: '/payment/success',
      element: <PaymentSuccess></PaymentSuccess>
    },
    {
      path: '*',
      element: <h1>404 not found</h1>
    },

    {
      path: '/test',
      element: <CarouselTest></CarouselTest>
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
