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
import ViewUserAbout from './components/MainSection/ViewProfile/ViewUserProfile/ViewUserAbout';
import AgencyRatings from './components/MainSection/MyAgency/AgencyRatings';
import ViewAgencyAbout from './components/MainSection/ViewProfile/ViewAgencyProfile/ViewAgencyAbout';
import ViewAgencyRatings from './components/MainSection/ViewProfile/ViewAgencyProfile/ViewAgencyRatings';
import AgencyDashboard from './components/MainSection/MyAgency/AgencyDashboard';
import Search from './components/MainSection/Search/Search';
import PersonalizeTour from './components/MainSection/TourAgencies/BookPersonalizeTour';
import PersonalizeTours from './components/MainSection/PersonalizeTours/PersonalizeTours';
import Admin from './components/Admin/Admin';
import AdminRoute from './routes/AdminRoute';
import AdminLayout from './layout/AdminLayout';
import PendingAgencies from './components/Admin/PendingAgencies';
import Reports from './components/Admin/Reports';
import AgencyRevenue from './components/MainSection/MyAgency/AgencyRevenue';

function App() {

  const tripRouter = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute><Main></Main></PrivateRoute>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/upcoming-tours',
          element: <UpComingTours></UpComingTours>
        },
        {
          path: '/tour-details/:id',
          element: <UpComingTourDetails></UpComingTourDetails>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/upcoming-tours/${params.id}`)
          }
        },

        {
          path: '/tour-agencies',
          element: <TourAgencies></TourAgencies>
        },
        {
          path: '/personalize-tour/:id',
          element: <PersonalizeTour></PersonalizeTour>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/recent-event',
          element: <RecentEvents></RecentEvents>
        },
        {
          path: '/personalize-tours',
          element: <PersonalizeTours></PersonalizeTours>
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
          element: <ViewUserProfileLayout></ViewUserProfileLayout>
        },
        {
          path: '/user/:email/about',
          element: <ViewUserAbout></ViewUserAbout>
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
            },
            {
              path: '/my-agency/agency-ratings',
              element: <AgencyRatings></AgencyRatings>
            },
            {
              path: '/my-agency/agency-dashboard',
              element: <AgencyDashboard></AgencyDashboard>
            },
            {
              path: '/my-agency/agency-dashboard/revenue',
              element: <AgencyRevenue></AgencyRevenue>
            }
          ]
        },

        {
          path: '/agencyProfile/:id',
          element: <ViewAgencyProfile></ViewAgencyProfile>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/agencyProfile/:id/about',
          element: <ViewAgencyAbout></ViewAgencyAbout>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/agencyProfile/:id/ratings',
          element: <ViewAgencyRatings></ViewAgencyRatings>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/agencyProfile/${params.id}`)
          }
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
      path: '/search',
      element: <Search></Search>
    },
    {
      path: '*',
      element: <h1>404 not found</h1>
    },
    {
      path: '/admin',
      element: <AdminRoute><AdminLayout></AdminLayout></AdminRoute>,
      children: [
        {
          path: '/admin',
          element: <PendingAgencies></PendingAgencies>
        },
        {
          path: '/admin/pending-reports',
          element: <Reports></Reports>
        }
      ]
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
