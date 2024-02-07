import { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useColor } from '../../context/ColorContext';
import { useModal } from '../../context/ModalContext';
import { Backdrop } from "../Backdrop/Backdrop";
import {
    RegisterContainer, CloseIcon,
    Header, Desc, Form,
    Email, Password, SignUpBtn,
    PasswordContainer, FormWrapper,
    NameWrapper, Name, NameErrorMsg,
    EmailErrorMsg, PasswordErrorMsg,
    EmailWrapper
} from './RegistrationModal.styled';

export const RegistrationModal = () => {
  const { closeModal } = useModal();
  const { selectedColor } = useColor();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isNameValid = /^[A-Za-z]{2,}$/.test(name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);

  const handleInputChange = (field, value) => {
    if (field === 'name') {
      setName(value);
    } else if (field === 'email') {
      setEmail(value);
    } else if (field === 'password') {
      setPassword(value);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateFields = () => {
    setNameError(isNameValid ? '' : 'Name should be at least 2 characters');
    setEmailError(isEmailValid ? '' : 'Invalid email address');
    setPasswordError(isPasswordValid ? '' : 'Password must be at least 8 characters with a number and a letter');
  };

  const handleClose = () => {
    document.body.classList.remove('no-scroll');
    closeModal();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    validateFields();

    if (isNameValid && isEmailValid && isPasswordValid) {
      console.log('Name: ', name);
      console.log('Email: ', email)
      console.log('Password: ', password)
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [closeModal]);

  return (
      <Backdrop onClick={handleClose}>
          <RegisterContainer onClick={(e) => e.stopPropagation()} >
              <CloseIcon >
                  <IoMdClose style={{ width: '32px', height: '32px' }}
                      onClick={handleClose}
                  />
              </CloseIcon>
              <Header>Registration</Header>
              <Desc>
                Thank you for your interest in our platform!
                In order to register, we need some information.
                Please provide us with the following information
              </Desc>
              <Form onSubmit={handleLogin}>
                  <FormWrapper>
                    <NameWrapper>
                      <Name
                        type="text"
                        placeholder="Name"
                        autoComplete='off'
                        value={name}
                        onBlur={validateFields}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        $haserror={Boolean(emailError)}
                        $selcolor={selectedColor}
                        />
                        {nameError && <NameErrorMsg>{nameError}</NameErrorMsg>}
                      </NameWrapper>
                      <EmailWrapper>
                          <Email
                              type="text"
                              placeholder="Email"
                              autoComplete='off'
                              value={email}
                              onBlur={validateFields}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              $haserror={Boolean(emailError)}
                              $selcolor={selectedColor}
                          />
                          {emailError && <EmailErrorMsg>{emailError}</EmailErrorMsg>}
                      </EmailWrapper>

                      <PasswordContainer>
                          <Password
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              autoComplete='off'
                              value={password}
                              onBlur={validateFields}
                              onChange={(e) => handleInputChange('password', e.target.value)}
                              $haserror={Boolean(passwordError)}
                              $selcolor={selectedColor}
                          />
                          <FaRegEye
                              onClick={handleTogglePasswordVisibility}
                              style={{
                                  position: 'absolute',
                                  right: '10px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  cursor: 'pointer',
                                  display: showPassword ? 'block' : 'none',
                              }}
                          />
                          <FaRegEyeSlash
                              onClick={handleTogglePasswordVisibility}
                              style={{
                                  position: 'absolute',
                                  right: '10px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  cursor: 'pointer',
                                  display: !showPassword ? 'block' : 'none',
                              }}
                          />
                          {passwordError && <PasswordErrorMsg>{passwordError}</PasswordErrorMsg>}
                      </PasswordContainer>
                  </FormWrapper>
                  <SignUpBtn type="submit" $selcolor={selectedColor}>Sign Up</SignUpBtn>
              </Form>
          </RegisterContainer>
      </Backdrop>
  );
};