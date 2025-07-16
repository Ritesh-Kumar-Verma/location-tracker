import React, { useState } from "react";
import "./Login.css";
const asd = () => {

  const [formData , setFormData] = useState({
    email:'',
    username:'',
    password:''

  })
  const submitData = (e)=>{
    e.preventDefault()
    
    const formData = new FormData(e.target)

    for(let i of formData.entries()){
      console.log(i)
    }

    
  }


  return (
    <div className="login-signup-window">
      <div className="left-signup">
        <p>Sign Up</p>
        <form action="" onSubmit={submitData} >
          <label htmlFor="email">EMAIL</label>
          <br />
          <input type="text" name="email" id="email" />
          <br />

          <label htmlFor="username">USERNAME</label>
          <br />
          <input type="text" name="username" id="username" />
          <br />

          <label htmlFor="password">PASSWORD</label>
          <br />
          <input type="password" name="password" id="password" />
          <br />

          <input type="checkbox" name="agreement" id="agreement" />
          <label htmlFor="agreement" id="agreement">
            I AGREE TO THE TERMS OF SERVICES AND PRIVACY POLICY
          </label>

          <input type="submit" value="Sign Up" className="btn-signup" />
          <button type="button" className="btn-login">
            LOG IN
          </button>
        </form>
      </div>
      <div className="right-login">asd</div>
    </div>
  );
};

export default asd;
