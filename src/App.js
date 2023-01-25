import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';


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
import ErrorPage from './components/ErrorPage/ErrorPage';
import MyPersonalizeBookedTour from './components/MainSection/RecentEvents/MyPersonalizeBookedTour';
import RequestTour from './components/MainSection/RequestTour/RequestTour';
import BidForTour from './components/MainSection/BidForTour/BidForTour';
import AcceptedTour from './components/MainSection/AcceptedTour/AcceptedTour';

function App() {

  const tripRouter = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
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
          element: <PrivateRoute><UpComingTours></UpComingTours></PrivateRoute>
        },
        {
          path: '/tour-details/:id',
          element: <PrivateRoute><UpComingTourDetails></UpComingTourDetails></PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`https://take-a-trip-server-sigma.vercel.app/upcoming-tours/${params.id}`)
          }
        },

        {
          path: '/tour-agencies',
          element: <PrivateRoute><TourAgencies></TourAgencies></PrivateRoute>
        },
        {
          path: '/personalize-tour/:id',
          element: <PrivateRoute><PersonalizeTour></PersonalizeTour></PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`https://take-a-trip-server-sigma.vercel.app/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/recent-event',
          element: <PrivateRoute><RecentEvents></RecentEvents></PrivateRoute>
        },
        {
          path: '/personalize-booked-tour',
          element: <PrivateRoute><MyPersonalizeBookedTour></MyPersonalizeBookedTour></PrivateRoute>
        },
        {
          path: '/request-tour',
          element: <PrivateRoute><RequestTour></RequestTour></PrivateRoute>
        },
        {
          path: '/accepted-tour',
          element: <PrivateRoute><AcceptedTour></AcceptedTour></PrivateRoute>
        },

        {
          path: '/profile',
          element: <PrivateRoute><ProfileLayout></ProfileLayout></PrivateRoute>,
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
          element: <PrivateRoute><ViewUserProfileLayout></ViewUserProfileLayout></PrivateRoute>
        },
        {
          path: '/user/:email/about',
          element: <PrivateRoute><ViewUserAbout></ViewUserAbout></PrivateRoute>
        },
        {
          path: '/create-agency',
          element: <PrivateRoute><CreateAgency></CreateAgency></PrivateRoute>
        },
        {
          path: '/bid-for-tour',
          element: <PrivateRoute><BidForTour></BidForTour></PrivateRoute>
        },
        {
          path: '/my-agency',
          element: <PrivateRoute><AgencyLayout></AgencyLayout></PrivateRoute>,
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
          element: <PrivateRoute><ViewAgencyProfile></ViewAgencyProfile></PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`https://take-a-trip-server-sigma.vercel.app/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/agencyProfile/:id/about',
          element: <PrivateRoute><ViewAgencyAbout></ViewAgencyAbout></PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`https://take-a-trip-server-sigma.vercel.app/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/agencyProfile/:id/ratings',
          element: <PrivateRoute><ViewAgencyRatings></ViewAgencyRatings></PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`https://take-a-trip-server-sigma.vercel.app/agencyProfile/${params.id}`)
          }
        },
        {
          path: '/settings',
          element: <PrivateRoute><Settings></Settings></PrivateRoute>
        },
        {
          path: '/profile-settings',
          element: <PrivateRoute><ProfileSettings></ProfileSettings></PrivateRoute>
        },
        {
          path: '/agency-settings',
          element: <PrivateRoute><AgencySettings></AgencySettings></PrivateRoute>
        },
        {
          path: '/menu',
          element: <PrivateRoute><Navigation></Navigation></PrivateRoute>
        },
        {
          path: '/notification',
          element: <PrivateRoute><Notifications></Notifications></PrivateRoute>
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
      element: <ErrorPage></ErrorPage>
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
      <Toaster />
    </div>
  );
}

export default App;
