import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { IoMdClose } from 'react-icons/io';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useColor } from '../../context/ColorContext';
import { useModal } from '../../context/ModalContext';
import { Backdrop } from '../Backdrop/Backdrop';
import {
  RegisterContainer, CloseIcon,
  Header, Desc, Form,
  Email, Password, SignUpBtn,
  PasswordContainer, FormWrapper,
  NameWrapper, Name, NameErrorMsg,
  EmailErrorMsg, PasswordErrorMsg,
  EmailWrapper
} from './RegistrationModal.styled';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should be at least 2 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    'Password must be at least 8 characters with a number and a letter')
    .required('Password is required and must be at least 8 characters with a number and a letter'),
});

export const RegistrationModal = () => {
  const { closeModal } = useModal();
  const { selectedColor } = useColor();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values) => {
      console.log('Name:', values.name);
      console.log('Email:', values.email);
      console.log('Password:', values.password);
      closeModal();
    },
  });

  const handleTogglePasswordVisibility = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  const handleClose = () => {
    document.body.classList.remove('no-scroll');
    closeModal();
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
      <RegisterContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon>
          <IoMdClose style={{ width: '32px', height: '32px' }} onClick={handleClose} />
        </CloseIcon>
        <Header>Registration</Header>
        <Desc>
          Thank you for your interest in our platform!
          In order to register, we need some information.
          Please provide us with the following information.
        </Desc>
        <Form onSubmit={formik.handleSubmit}>
          <FormWrapper>
            <NameWrapper>
              <Name
                type="text"
                placeholder="Name"
                autoComplete="off"
                {...formik.getFieldProps('name')}
                $haserror={formik.touched.name && formik.errors.name}
                $selcolor={selectedColor}
              />
              {formik.touched.name && formik.errors.name && <NameErrorMsg>{formik.errors.name}</NameErrorMsg>}
            </NameWrapper>
            <EmailWrapper>
              <Email
                type="text"
                placeholder="Email"
                autoComplete="off"
                {...formik.getFieldProps('email')}
                $haserror={formik.touched.email && formik.errors.email}
                $selcolor={selectedColor}
              />
              {formik.touched.email && formik.errors.email && <EmailErrorMsg>{formik.errors.email}</EmailErrorMsg>}
            </EmailWrapper>

            <PasswordContainer>
              <Password
                type={formik.values.showPassword ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="off"
                {...formik.getFieldProps('password')}
                $haserror={formik.touched.password && formik.errors.password}
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
                  display: formik.values.showPassword ? 'block' : 'none',
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
                  display: !formik.values.showPassword ? 'block' : 'none',
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <PasswordErrorMsg>{formik.errors.password}</PasswordErrorMsg>
              )}
            </PasswordContainer>
          </FormWrapper>
          <SignUpBtn type="submit" $selcolor={selectedColor}>Sign Up</SignUpBtn>
        </Form>
      </RegisterContainer>
    </Backdrop>
  );
};
