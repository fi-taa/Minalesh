import React from "react";

function signUp() {
  return (
    // return 
    <div>
        {/* navbar */}
        <div className="p-2 bg-blue-100 font-bold text-2xl"><span>Minalesh</span></div>
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
          <input
            type="text"
            placeholder="First Name"
            className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
          />
          <input
            type="text"
            placeholder="retype Password"
            className="px-5 py-1 w-[240px] text-white rounded bg-slate-600"
          />
          <div className="flex gap-5">
            <input type="radio" /> <label>Customer </label>
            <input type="radio" /><label>Client </label>
          </div>
        </form>
        
        {/* button */}
        <button className=" mt-3 px-5 py-1 w-[240px] text-white rounded bg-slate-600">Sign Up</button>
        </div>
       
      </div>
    </div>
    </div>
    // main background
    
  );
}

export default signUp;
