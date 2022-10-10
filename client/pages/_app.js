import "bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "../components/header";
import buildClient from "./../api/build-client";

const MyApp = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <HeaderComponent currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
