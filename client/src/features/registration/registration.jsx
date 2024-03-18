import React, { useState } from 'react';
import './registration.css'; 
import { Link } from 'react-router-dom';
import logo from "../../images/logo.GCrBBNnxnOwXs1M3EMoAJtlyEtgPZp9fU"
const RegistrationForm = () => {
  const [userType, setUserType] = useState('consumer'); 

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [prefrence, setprefrence] = useState();

  const [dietaryRestrictions, setdietaryRestrictions] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with userType:", userType);
  };

  return (
    <div className="registrationFormContainer">
      <img src={logo} alt="App Logo" className="appLogo" /> {/* Logo at the top */}
      <h2 className="formTitle">Register as a Food Savior</h2>
      <div className="userTypeToggle">
        <button className={userType === 'consumer' ? 'active' : ''} onClick={() => setUserType('consumer')}>Consumer</button>
        <button className={userType === 'provider' ? 'active' : ''} onClick={() => setUserType('provider')}>Provider</button>
      </div>
      <form onSubmit={handleSubmit} className="registrationForm">
        {/* Common fields */}
        <div className="inputGroup">
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setname(e.target.value)}
            required />
        </div>
        <div className="inputGroup">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required />
        </div>
        <div className="inputGroup">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required />
        </div>
        {/* Provider-specific fields */}
        {userType === 'provider' && (
          <>
            <div className="inputGroup">
              <input type="text" placeholder="Business Name" required />
            </div>
            <div className="inputGroup">
              <input type="text" placeholder="Address" required />
            </div>
            <div className="inputGroup">
              <select 
                value={prefrence}
                onChange={(e) => setprefrence(e.target.value)}
                required>
                <option value="">Type of Food Provided</option>
                <option value="baked_goods">Baked Goods</option>
                <option value="fresh_produce">Fresh Produce</option>
                <option value="prepared_meals">Prepared Meals</option>
              </select>
            </div>
            <div className="inputGroup">
              <input
                type="text"
                value={dietaryRestrictions} 
                placeholder="Contact Information" 
                onChange={(e) => setdietaryRestrictions(e.target.value)}
                required />
            </div>
          </>
        )}
        
        {/* Consumer-specific fields */}
        {userType === 'consumer' && (
          <>
            <div className="inputGroup">
              <select 
                value={prefrence}
                required>
                <option value="">Preferences</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten_free">Gluten-Free</option>
              </select>
            </div>
            <div className="inputGroup">
              <input type="text" placeholder="Dietary Restrictions" />
            </div>
          </>
        )}
        
        <button type="submit" className="submitBtn">Register</button>
      </form>
      <div className="alreadyMember">
        Already have an account? <Link to="/login" className="loginLink">Log in</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
