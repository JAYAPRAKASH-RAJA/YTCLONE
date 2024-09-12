import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import * as jwt_decode from "jwt-decode";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const Signin = ({ setShowSignin }) => {
  const [currentState, setCurrentState] = useState("Signup");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const clientId = import.meta.env.GOOGLE_CLIENT_ID;

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { name, email, password } = data;
      const endpoint =
        currentState === "Signin"
          ? "http://localhost:8010/api/auth/signin"
          : "http://localhost:8010/api/auth/signup";

      const res = await axios.post(
        endpoint,
        { name, email, password },
        { withCredentials: true }
      );
      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      alert(`${currentState} successful!`);
      setShowSignin(false);
    } catch (err) {
      console.error(err);
      alert(`${currentState} failed!`);
    }
  };

  const handleSuccess = (response: any) => {
    const token = response.credential;
    const decoded = jwt_decode(token);
    console.log("Login Success:", decoded);
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 grid">
      <form
        onSubmit={handleLogin}
        className="place-self-center w-[max(23vw,330px)] bg-cyan-50 p-6 rounded-lg flex flex-col gap-6 text-gray-500 text-sm animate-fadeIn"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="font-medium ml-28">{currentState}</h2>
          <img
            onClick={() => setShowSignin(false)}
            src="https://img.icons8.com/?size=100&id=45&format=png&color=000000"
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Signup" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
              className="outline-none border border-gray-300 p-2 rounded-md"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button className="bg-slate-300 w-fill rounded" type="submit">
          {currentState === "Signup" ? "Create Account" : "Login"}
        </button>
        <GoogleLogin
          clientId="clientId"
          onSuccess={handleSuccess}
          onError={handleError}
        />

        <div className="flex items-start gap-2 mt-[-12px]">
          <input id="terms" type="checkbox" required className="mt-[4px]" />
          <label htmlFor="terms" className="text-left">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
        {currentState === "Signin" ? (
          <p className="cursor-pointer">
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Signup")}>Click here</span>
          </p>
        ) : (
          <p className="cursor-pointer">
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Signin")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signin;
