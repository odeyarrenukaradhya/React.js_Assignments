import React, { useState } from 'react';

const initialFormData = {
  fullName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  gender: '',
  dateOfBirth: '',
  department: '',
  address: '',
};

const initialErrors = Object.keys(initialFormData).reduce((acc, key) => ({ ...acc, [key]: '' }), {});

const validateField = (name, value, formData) => {
  switch (name) {
    case 'fullName':
      if (!value) return 'Full Name is required.';
      if (!/^[A-Za-z\s]+$/.test(value)) return 'Only alphabets and spaces are allowed.';
      return '';

    case 'username':
      if (value.length < 5) return 'Username must be at least 5 characters long.';
      if (/\s|[^A-Za-z0-9]/.test(value)) return 'No spaces or special characters allowed.';
      return '';

    case 'email':
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format (example@domain.com).';
      return '';

    case 'password':
      if (value.length < 8) return 'Password must be at least 8 characters.';
      if (!/[A-Z]/.test(value)) return 'Must include an uppercase letter.';
      if (!/[a-z]/.test(value)) return 'Must include a lowercase letter.';
      if (!/[0-9]/.test(value)) return 'Must include a number.';
      if (!/[^A-Za-z0-9]/.test(value)) return 'Must include a symbol (e.g., !@#$%^&*).';
      // Validation Rule 10: Password ≠ Username
      if (value && formData.username && value === formData.username) return 'Password cannot be the same as the Username.';
      return '';

    case 'confirmPassword':
      if (value !== formData.password) return 'Passwords do not match.';
      return '';

    case 'phoneNumber':
      if (!/^\d{10}$/.test(value)) return 'Phone Number must be exactly 10 digits.';
      return '';

    case 'gender':
      if (!value) return 'Gender selection is required.';
      return '';

    case 'dateOfBirth':
      if (!value) return 'Date of Birth is required.';
      if (new Date(value) > new Date()) return 'Date of Birth cannot be a future date.';
      return '';

    case 'department':
      if (!value) return 'Department selection is required.';
      return '';

    case 'address':
      if (!value) return 'Address is required.';
      return '';

    default:
      return '';
  }
};

const RegistrationForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (currentFormData) => {
    let newErrors = {};
    let formIsValid = true;

    Object.keys(currentFormData).forEach(name => {
      const error = validateField(name, currentFormData[name], currentFormData);
      newErrors[name] = error;
      
      if (!currentFormData[name] && name !== 'address') { 
          newErrors[name] = newErrors[name] || `${name.replace(/([A-Z])/g, ' $1').trim()} is required.`;
      }

      if (newErrors[name]) {
        formIsValid = false;
      }
    });

    setErrors(newErrors);
    setIsFormValid(formIsValid);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    let newErrors = { ...errors };
    
    newErrors[name] = validateField(name, value, newFormData);

    if (name === 'password' || name === 'confirmPassword') {
        newErrors.confirmPassword = validateField('confirmPassword', newFormData.confirmPassword, newFormData);
    }
    if (name === 'password' || name === 'username') {
        newErrors.password = validateField('password', newFormData.password, newFormData);
    }
    
    setErrors(newErrors);

    const overallValid = Object.keys(newErrors).every(key => newErrors[key] === '') &&
                         Object.values(newFormData).every(val => val !== '');
    setIsFormValid(overallValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm(formData);

    if (isValid) {
      console.log('Form Submitted Successfully:', formData);
      onSubmitSuccess(); 
    } else {
      console.log('Form has errors. Preventing submission.');
    
      const firstErrorField = Object.keys(errors).find(key => errors[key]);
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const departments = [
    { value: '', label: 'Select Department / Course' },
    { value: 'CSE', label: 'Computer Science Engineering' },
    { value: 'ISE', label: 'Information Science Engineering' },
    { value: 'EE', label: 'Electrical Engineering' },
    { value: 'ME', label: 'Mechanical Engineering' },
    { value: 'MBA', label: 'Master of Business Administration' },
  ];

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      
      {/* FULL NAME */}
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='Enter your full name here'
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? 'input-error' : ''}
        />
        {errors.fullName && <p className="error-message">{errors.fullName}</p>}
      </div>

      {/* USERNAME */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder='Enter your user name here'
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? 'input-error' : ''}
        />
        {errors.username && <p className="error-message">{errors.username}</p>}
      </div>

      {/* EMAIL */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter your email here'
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      {/* PASSWORD */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='enter your password here'
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'input-error' : ''}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Confirm your password'
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? 'input-error' : ''}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      </div>

      {/* PHONE NUMBER */}
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder='enter your phone number here'
          value={formData.phoneNumber}
          onChange={handleChange}
          maxLength="10"
          className={errors.phoneNumber ? 'input-error' : ''}
        />
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
      </div>

      {/* GENDER (Radio) */}
      <div className="form-group">
        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            /> Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
            /> Other
          </label>
        </div>
        {errors.gender && <p className="error-message">{errors.gender}</p>}
      </div>

      {/* DATE OF BIRTH */}
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          max={new Date().toISOString().split('T')[0]} // Prevents future date selection
          className={errors.dateOfBirth ? 'input-error' : ''}
        />
        {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
      </div>

      {/* DEPARTMENT / COURSE (Dropdown) */}
      <div className="form-group">
        <label htmlFor="department">Department / Course</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className={errors.department ? 'input-error' : ''}
        >
          {departments.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.department && <p className="error-message">{errors.department}</p>}
      </div>

      {/* ADDRESS */}
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          placeholder='Enter your permanent address here'
          rows="3"
          value={formData.address}
          onChange={handleChange}
          className={errors.address ? 'input-error' : ''}
        ></textarea>
        {errors.address && <p className="error-message">{errors.address}</p>}
      </div>

      {/* SUBMIT BUTTON */}
      <button type="submit" className="submit-button" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;