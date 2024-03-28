import { useState } from "react";

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    dob: "",
    phone: ""
  })

  const handleChange = e => {
    setUserInfo(info => {
      const res = {
        ...info,
        [e.target.name]: e.target.value,
      }
      return res;
    })
  }



  const handleSubmit = e => {
    e.preventDefault();

    //Phone Number validation
    if (userInfo.phone.length !== 10)
      return alert("Invalid phone number. Please enter a 10-digit phone number.");


    //DOB validation
    const dob = new Date(userInfo.dob);

    if (dob > new Date())
      return alert("Invalid date of birth. Date of birth cannot be in the future.");


    //Email Validation
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const text = "Invalid email. Please check your email address."
    console.log(emailRegex.test(userInfo.email))

    setUserInfo({
      username: "",
      phone: "",
      dob: "",
      email: ""
    })
  }
  return (
    <>
      <h2>Fill Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={handleChange} value={userInfo.username} required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required value={userInfo.email} />

        <label htmlFor="phone">Phone Number:</label>
        <input type="number" required name="phone" id="phone" onChange={handleChange} value={userInfo.phone} />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" required id="dob" name="dob" onChange={handleChange} value={userInfo.dob} />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </>
  );
};


export default UserForm;