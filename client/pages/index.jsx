import buildClient from "../api/build-client";

const Index = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in!</h1>
  ) : (
    <h1>You are not signed in!</h1>
  );
};

Index.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get("/api/users/currentuser");
  return data;
};

export default Index;

// kubectl get services -n ingress-nginx (get nginx services)
// service.namespace.svc.cluster.local