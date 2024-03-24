import React, { Suspense, lazy, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Center, Spinner } from "@chakra-ui/react";
import AuthGuard from "./components/AuthGuard";

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const { Component, path, pageTitle } = route;
        const Guard = route.guard || Fragment;

        return (
          <Route
            key={index}
            path={path}
            element={
              <>
                <Guard>
                  <Helmet>
                    <title>{`${
                      pageTitle && `${pageTitle} - `
                    } CC Marketplace`}</title>
                  </Helmet>
                  <Suspense
                    fallback={
                      <Center h={window.innerHeight} w={"full"} flex={1}>
                        <Spinner
                          thickness="4px"
                          speed="0.60s"
                          emptyColor="gray.200"
                          color="red.700"
                          size="xl"
                        />
                      </Center>
                    }
                  >
                    <Component />
                  </Suspense>
                </Guard>
              </>
            }
          />
        );
      })}
    </Routes>
  );
};

const publicRoutes = [
  {
    path: "/",
    Component: lazy(() => import("./components/Login")),
    pageTitle: "Login Page",
  },
  {
    path: "/Home",
    Component: lazy(() => import("./Pages/Home")),
    pageTitle: "Home",
    guard: AuthGuard,
  },
  {
    path: "/login",
    Component: lazy(() => import("./components/Login")),
    pageTitle: "Login Page",
  },
  {
    path: "/signup",
    Component: lazy(() => import("./components/Signup")),
    pageTitle: "SignUp Page",
  },
];
export default AppRoutes;
