import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { IoMdClose } from 'react-icons/io';
import { Backdrop } from '../Backdrop/Backdrop';
import { useAuth } from '../../context/AuthContext';
import { useColor } from '../../context/ColorContext';
import { useModal } from '../../context/ModalContext';
import { LoginAPI } from '../../services/firebaseAPI';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import {
    Desc,
    Form,
    Email,
    Header, 
    LoginBtn,
    Password,
    CloseIcon,
    FormWrapper,
    EmailWrapper, 
    EmailErrorMsg,
    LoginContainer,
    PasswordErrorMsg,
    PasswordContainer, 
} from './LoginModal.styled';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        'Password must be at least 8 characters with a number and a letter')
        .required('Password is required field, Password must be at least 8 characters with a number and a letter '),
});

export const LoginModal = () => {
    const { closeModal } = useModal();
    const { selectedColor } = useColor();
    const { setRegistrationStatus } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async () => {
            await handleLogin(formik.values.email, formik.values.password);
    },
    });

    const handleLogin = async (email, password) => {
        try {
            const userName = await LoginAPI(email, password);

            setRegistrationStatus(true, userName);

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('registeredUserName', userName);

            closeModal();
        } catch (error) {
            throw new Error(error);
        }
    };

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
            <LoginContainer onClick={(e) => e.stopPropagation()}>
                <CloseIcon>
                    <IoMdClose style={{ width: '32px', height: '32px' }} onClick={handleClose} />
                </CloseIcon>
                <Header>Log In</Header>
                <Desc>
                    Welcome back! Please enter your credentials to access your
                    account and continue your search for a teacher.
                </Desc>
                <Form onSubmit={formik.handleSubmit}>
                    <FormWrapper>
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
                <LoginBtn type="submit" $selcolor={selectedColor}>Log In</LoginBtn>
                </Form>
            </LoginContainer>
        </Backdrop>
    );
};
