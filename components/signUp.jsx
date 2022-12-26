import React from "react";
import { z } from "zod";
import { Formik } from "zod-formik-adapter";
import { toFormikValidationSchema } from "zod-formik-adapter";
import  InputField from "../components/inputField"
function SignUp() {
  return (
    // return
    <div>
      {/* navbar */}
      <div className="p-2 bg-blue-100 font-bold text-2xl">
        <span>Minalesh</span>
      </div>
      {/* main background */}
      <div className=" bg-slate-800 flex justify-center py-[105px] w-full h-full">
        {/* signUp box */}
        <div className="bg-blue-100 flex flex-col gap-2 w-[500px] h-[450px] rounded shadow-lg shadow-transparent">
          {/* navbar for signUp box */}
          <div className="w-full flex place-content-between font-bold bg-slate-400 rounded p-2  ">
            <h1>Sign Up</h1>
            <span className="font-extrabold"> &rarr;</span>
          </div>

          {/* form + button */}
          <div className="p-10 px-32 flex flex-col gap-3">
            {/* form  */}
            <form className="flex flex-col gap-3">
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField placeholder="E-mail"/>
            <InputField placeholder="Phone"/>
            <InputField placeholder="Password"/>
            <InputField placeholder="retype password"/>
              
              
              <div className="flex gap-5">
                <input type="radio" /> <label>Customer </label>
                <input type="radio" />
                <label>Client </label>
              </div>
            </form>

            {/* button */}
            <button className=" mt-3 px-5 py-1 w-[240px] text-white rounded bg-slate-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    // main background
  );
}

export default SignUp;
