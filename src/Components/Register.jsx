import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with username: ', user, ' email: ', email, ' and password: ', pass);
  }

  return (
    <div>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="username" id="username" name="username" required />
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" id="email" name="email" required />
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
