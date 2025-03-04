import { useState } from "react";
import { useRouter } from "next/router";
import useRequest from "../../hooks/use-request";

const signin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: { email, password },
    onSuccess: () => router.push("/"),
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6  mx-auto">
          <form onSubmit={submitHandler}>
            <h1 className="text-center mb-3">Sign in</h1>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors}
            <div className="d-grid">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signin;
