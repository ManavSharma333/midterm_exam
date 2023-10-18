import React, { useState } from 'react';

const SignUpUser = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = form;

    // Validating the email using regex
    const emailRegex = /^\S+@\S+$/i;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Checking if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // If all validations pass
    alert(JSON.stringify(form, null, 2));
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} class="style01">
        <h1>Sign Up</h1>
        <br></br>
      <label>FirstName : </label>
      <input
        type="text"
        name="fname"
        value={form.fname}
        onChange={handleInputChange}
        required
      />
      <br />
      <br></br>
      <label>LastName : </label>
      <input
        type="text"
        name="lname"
        value={form.lname}
        onChange={handleInputChange}
        required
      />
      <br />
      <br></br>
      <label>UserName : </label>
      <input
        type="text"
        name="uname"
        value={form.uname}
        onChange={handleInputChange}
        required
      />
      <br /><br></br>
      <label>Email : </label>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleInputChange}
        required
      />
      <br /><br></br>
      <label>Password : </label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleInputChange}
        required
      />
      <br /><br></br>
      <label>Confirm Password : </label>
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleInputChange}
        required
      />
      <br />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
