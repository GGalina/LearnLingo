import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { IoMdClose } from 'react-icons/io';
import { Backdrop } from '../Backdrop/Backdrop';
import { sendEmailApi } from '../../services/firebaseAPI'; 
import { useColor } from '../../context/ColorContext';
import { useModal } from '../../context/ModalContext';
import {
    Form,
    Desc,
    Name,
    Email,
    Phone,
    Header,
    Teacher,
    BookBtn,
    CloseIcon,
    RadioInput,
    RadioLabel,
    GreyAccent,
    NameWrapper,
    FormWrapper,
    RadioHeader,
    TeacherName,
    EmailWrapper,
    PhoneWrapper,
    TeacherPhoto,
    NameErrorMsg,
    EmailErrorMsg,
    PhoneErrorMsg,
    TeacherWrapper,
    RadioContainer,
    RadioIndicator,
    BookingContainer,
} from './BookingModal.styled';

const BookingSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name should be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^\+[0-9]+$/, 'Please enter phone number in +380 format').required('Phone number is required'),
});

export const BookingModal = () => {
    const { selectedColor } = useColor();
    const { modalData, closeModal } = useModal();
    const { avatar_url, name, surname } = modalData;

    const handleClose = () => {
        closeModal();
        document.body.classList.remove('no-scroll');
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            reason: 'Career and business',
        },
        validationSchema: BookingSchema,
        onSubmit: async () => {
            await handleBooking(formik.values.name, formik.values.email, formik.values.phone, formik.values.reason);
        },
    });

    const handleBooking = async ( name, email, phone, reason) => {
        try {
            const formData = {
                teacher: `${modalData.name} ${modalData.surname}`,
                name,
                email,
                phone,
                reason
            }
            await sendEmailApi(formData);
            handleClose();
            toast('Thank you for booking! Our manager will contact you soon.');
        } catch (error) {
            throw new Error(error);
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
      <BookingContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon>
          <IoMdClose style={{ width: '32px', height: '32px' }} onClick={handleClose} />
        </CloseIcon>
        <Header>Book trial lesson</Header>
        <Desc>
            Our experienced tutor will assess your current
            language level, discuss your learning goals,
            and tailor the lesson to your specific needs.
        </Desc>
        <Teacher>
            <TeacherPhoto src={avatar_url} alt="User profile photo"/>
            <TeacherWrapper>
                <GreyAccent>Your teacher</GreyAccent>
                <TeacherName>{name + ' ' + surname}</TeacherName>
            </TeacherWrapper>
        </Teacher>
        <RadioHeader>What is your main reason for learning English?</RadioHeader>   
        <RadioContainer >
            <RadioLabel>
                <RadioInput
                    type="radio"
                    name="group"
                    value="Career and business"
                    checked={formik.values.reason === "Career and business"}
                    onChange={() => formik.setFieldValue('reason', 'Career and business')}
                />
                <RadioIndicator $selcolor={selectedColor}/>
                Career and business
            </RadioLabel>
                    
            <RadioLabel>
                <RadioInput
                    type="radio"
                    name="group"
                    value="Lesson for kids"
                    checked={formik.values.reason === "Lesson for kids"}
                    onChange={() => formik.setFieldValue('reason', 'Lesson for kids')}
                />
                <RadioIndicator $selcolor={selectedColor}/>
                Lesson for kids
            </RadioLabel>
                  
            <RadioLabel>
                <RadioInput
                    type="radio"
                    name="group"
                    value="Living abroad"
                    checked={formik.values.reason === "Living abroad"}
                    onChange={() => formik.setFieldValue('reason', 'Living abroad')}
                />
                <RadioIndicator $selcolor={selectedColor}/>
                Living abroad
            </RadioLabel>
                    
            <RadioLabel>
                <RadioInput
                    type="radio"
                    name="group"
                    value="Exams and coursework"
                    checked={formik.values.reason === "Exams and coursework"}
                    onChange={() => formik.setFieldValue('reason', 'Exams and coursework')}
                />
                <RadioIndicator $selcolor={selectedColor}/>
                Exams and coursework
            </RadioLabel>
                    
            <RadioLabel>
                <RadioInput
                    type="radio"
                    name="group"
                    value="Culture, travel or hobby"
                    checked={formik.values.reason === "Culture, travel or hobby"}
                    onChange={() => formik.setFieldValue('reason', 'Culture, travel or hobby')}
                />
                <RadioIndicator $selcolor={selectedColor} />
                Culture, travel or hobby
            </RadioLabel>
        </RadioContainer>
              
        <Form onSubmit={formik.handleSubmit}>
          <FormWrapper>
            <NameWrapper>
              <Name
                type="text"
                placeholder="Full Name"
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

            <PhoneWrapper>
              <Phone
                type="tel"
                placeholder="Phone number"
                autoComplete="off"
                {...formik.getFieldProps('phone')}
                $haserror={formik.touched.phone && formik.errors.phone}
                $selcolor={selectedColor}
              />
              {formik.touched.phone && formik.errors.phone && (
                <PhoneErrorMsg>{formik.errors.phone}</PhoneErrorMsg>
              )}
            </PhoneWrapper>
          </FormWrapper>
          <BookBtn type="submit" $selcolor={selectedColor}>Book</BookBtn>
        </Form>
      </BookingContainer>
    </Backdrop>
  );
};
