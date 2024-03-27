const UserForm = () => {
  return (
    <>
      <h2>Fill Details</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="emailId">Email Address:</label>
        <input type="email" id="emailId" name="emailId" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="phone" required name="phone" id="phone" />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" required id="dob" name="dob" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};


export default UserForm;