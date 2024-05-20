import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/auth/candidate/Register";
import Login from "../pages/auth/candidate/Login";
import Alerts from "../pages/candidate/Alerts";
import MyAccount from "../pages/candidate/MyAccount";
import MyCV from "../pages/candidate/MyCV";
import ResultsSearch from "../pages/candidate/ResultsSearch";
import MyApplications from "../pages/candidate/MyApplications";
import RegisterComp from "../pages/auth/company/RegisterComp";
import LoginComp from "../pages/auth/company/LoginComp";
import MyAccountComp from "../pages/company/MyAccountComp";
import MyAdsComp from "../pages/company/MyAdsComp";
import PostMyAd from "../pages/company/PostMyAd";
import LinkInterestPageSoftware from '../pages/linkInterest-1';
import LinkInterestPageQuestions from '../pages/linkInterest-2';
import LinkInterestPageJobs from '../pages/linkInterest-3';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/auth/candidate/login" element={<Login />} />
        <Route path="/auth/candidate/register" element={<Register />} />

        {/* Candidate */}
        <Route path="/link-interest-software" element={<LinkInterestPageSoftware />} />
        <Route path="/link-interest-questions" element={<LinkInterestPageQuestions />} />
        <Route path="/link-interest-jobs" element={<LinkInterestPageJobs />} />
        <Route path="/candidate/alerts" element={<Alerts />} />
        <Route path="/candidate/my-applications" element={<MyApplications />} />
        <Route path="/candidate/my-account" element={<MyAccount />} />
        <Route path="/candidate/my-cv" element={<MyCV />} />
        <Route
          path="/candidate/search/:value/:location?"
          element={<ResultsSearch />}
        />
        <Route
          path="/candidate/search/geo/:location?"
          element={<ResultsSearch />}
        />
        <Route path="/candidate/search/featured-area/:featuredArea?" element={<ResultsSearch />} />

        {/* Company */}
        <Route path="/auth/company/login" element={<LoginComp />} />
        <Route path="/auth/company/register" element={<RegisterComp />} />
        <Route path="/company/my-account" element={<MyAccountComp />} />
        <Route path="/company/my-ads" element={<MyAdsComp />} />
        <Route path="/company/post-my-ad" element={<PostMyAd />} />
        {/* <Route
            path="/admin/*"
            element={
              <PrivateRoute isAuthenticated={true}>
                <PrivateRouter />
              </PrivateRoute>
            }
          /> */}

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
