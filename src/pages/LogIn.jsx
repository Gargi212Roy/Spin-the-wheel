import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import "./LogIn.css";

function LogIn() {
  const [checked, setChecked] = useState(false);
  const initialState = { email: "", phoneNumber: "" };
  const [userData, setUserData] = useState(initialState);
  const [database, setDatabase] = useState([]);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mockAPI();

    const credentials = { ...userData, id: uuid() };
    console.log(credentials);
    setDatabase([...database, credentials]);
    const errors = validateData(userData);
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("validating form");
      setIsSubmit(true);

      navigate("/spinner");
    }
  };

  const validateData = (values) => {
    const err = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const regexPhoneNo = /^[0-9]{10}$/;

    if (!values.email) {
      err.email = "Email Required!";
    } else if (!regexEmail.test(values.email)) {
      err.email = "Email invalid!";
    }
    if (!values.phoneNumber) {
      err.phoneNumber = "Phone Number required!";
    } else if (!regexPhoneNo.test(values.phoneNumber)) {
      err.phoneNumber = "Phone Number invalid!";
    }
    return err;
  };

  const mockAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success"), 5000);
    });
  };

  return (
    <div className=" logInMainContainer ">
      <div className="flex flex-col pb-2 logInHeader">
        <h1 className="font-family font-black text-4xl logInHeader1">
          This is how EngageBud
        </h1>
        <h1 className="font-family font-black text-4xl logInHeader1 ">
          looks like in action!
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="formMainContainer">
        <div className="flex flex-row mb-3 ">
          <AiOutlineMail className="  bg-white p-1 w-6 h-11 divider-icon " />
          <input
            type="text"
            name="email"
            placeholder="Email Joe@gmail.com"
            autoComplete="off"
            value={userData.email}
            onChange={handleChange}
            className="p-2 divider "
          />
        </div>
        <p>{formError.email}</p>
        <div className="flex flex-row mb-3 ">
          <MdOutlineLocalPhone className=" bg-white p-1 w-6 h-11 divider-icon " />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number +91 98256 XXXXX"
            value={userData.phoneNumber}
            onChange={handleChange}
            autoComplete="off"
            className="p-2  divider "
          />
        </div>
        <p>{formError.phoneNumber}</p>

        <div className="flex flex-row border-2 border-zinc-900 p-1  h-22 rounded-md">
          <input
            className="mr-3 ml-1 w-10 h-18"
            type="checkbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <div className="font">
            <p>
              I agree to receiving recurring automated messages at the number I
              have provided.{" "}
              <span>Consent is not a condition to purchase.</span>
            </p>
          </div>
        </div>
        <button
          className="buttonContainer mt-4 bg-green-900 rounded-xl  h-14 "
          type="submit"
        >
          <span className="text-slate-100 text-2xl ">Try Your luck</span>
        </button>
        <div className="flex flex-row italic text-xs text-end">
          <p>*You can spin the wheel only once!</p>
          <p className="size">
            *If you win, you can claim your coupon for 10 minutes only!
          </p>
        </div>
        <div className="flex flex-row mt-2 text-bold text-xl justify-end ending-text ">
          <button>No, I don’t feel lucky</button>
          <RxCross1 className="mt-2 alignIcon" />
        </div>
      </form>
    </div>
  );
}

export default LogIn;
