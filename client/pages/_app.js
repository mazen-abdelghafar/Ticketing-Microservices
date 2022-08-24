import "bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "../components/header";
import buildClient from "./../api/build-client";

const MyApp = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <HeaderComponent currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const { data } = await buildClient(appContext.ctx).get(
    "/api/users/currentuser"
  );

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
