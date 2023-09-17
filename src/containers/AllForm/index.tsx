import React, { useState } from 'react';
import { Card, Text } from '../../components';
import { Input, DatePicker, Button, Space } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
import dayjs from 'dayjs';

interface RegistrationInformation {
    name: string;
    email: string;
    dob: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    username: string;
    password: string;
}

const initialValues = {
    name: '',
    email: '',
    dob: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    username: '',
    password: ''
}

const validationSchema = yup.object({
    name: yup.string().required('Please Enter Your Full Name'),
    email: yup.string().email('Invalid Email!').required('Please Enter Your Email'),
    dateOfBirth: yup.date().required("Date of Birth is required"),
    street: yup.string().required('Plese Enter Your Street Address'),
    city: yup.string().required('Plese Enter Your City'),
    state: yup.string().required('Please Enter Your State'),
    zipcode: yup.string().required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, 'Must be exactly 5 digits')
      .max(5, 'Must be exactly 5 digits'),
    username: yup.string().required('Please Enter Your Username'),
    password: yup.string().required("Please Enter Your Password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Use at least 8 characters, one uppercase letter, one lowercase letter, and one number"
      )
})

const AllForm: React.FC = () => {

    const handleSubmit = (values: RegistrationInformation) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
      if(step === 1 || step === 2) {
          setStep((prevStep) => prevStep+1);
      }
  
      return
    }
  
    const handlePrev = () => {
      if(step === 2 || step === 3) {
          setStep((prevStep) => prevStep - 1);
      }
  
      return
    }


    return (
        <>
            <form onSubmit={formMik.handleSubmit}>
            {step === 1 && (
                <div>
                    <div>
                        <Text>Full Name: </Text>
                        <Input name={'name'}
                            value={formMik.values.name} 
                            onChange={formMik.handleChange('name')}
                            status={formMik.errors.name && 'error'}
                        />
                        {formMik.errors.name && (
                            <Text>{formMik.errors.name}</Text>
                        )}
                    </div>
                    <div>
                        <Text>Email Adress: </Text>
                        <Input name={'email'} 
                            value={formMik.values.email}
                            onChange={formMik.handleChange('email')}
                            status={formMik.errors.email && 'error'}
                            />
                        {formMik.errors.email && (
                            <Text>{formMik.errors.email}</Text>
                        )}
                    </div>
                    <div>
                        <Text>Date of Birth: </Text>
                        <Input name={'dob'} 
                            value={formMik.values.dob}
                            onChange={formMik.handleChange('dob')}
                            status={formMik.errors.dob && 'error'}
                            />
                        {formMik.errors.dob && (
                            <Text>{formMik.errors.dob}</Text>
                        )}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div>
                    <div>  
                        <Text>Street Address</Text>
                        <Input name={'street'} 
                            value={formMik.values.street}
                            onChange={formMik.handleChange('street')}
                            status={formMik.errors.street && 'error'}
                            />
                        {formMik.errors.street&& (
                            <Text>{formMik.errors.street}</Text>
                        )}
                    </div>

                    <div>
                        <Text>State</Text>
                        <Input name={'state'} 
                            value={formMik.values.state}
                            onChange={formMik.handleChange('state')}
                            status={formMik.errors.state && 'error'}
                            />
                        {formMik.errors.state&& (
                            <Text>{formMik.errors.state}</Text>
                        )}
                    </div>

                    <div>
                        <Text>City</Text>
                        <Input name={'city'} 
                            value={formMik.values.city}
                            onChange={formMik.handleChange('city')}
                            status={formMik.errors.city && 'error'}
                            />
                        {formMik.errors.city&& (
                            <Text>{formMik.errors.city}</Text>
                        )}
                    </div>  

                    <div>
                        <Text>Zip Code</Text>
                        <Input name={'zipcode'} 
                            value={formMik.values.zipcode}
                            onChange={formMik.handleChange('zipcode')}
                            status={formMik.errors.zipcode && 'error'}
                            />
                        {formMik.errors.zipcode&& (
                            <Text>{formMik.errors.zipcode}</Text>
                        )}
                    </div>
                </div>
            )}

            {step === 3 && (
                <div>
                    <div>  
                        <Text>Username</Text>
                        <Input name={'username'} 
                            value={formMik.values.username}
                            onChange={formMik.handleChange('username')}
                            status={formMik.errors.username && 'error'}
                            />
                        {formMik.errors.username&& (
                            <Text>{formMik.errors.username}</Text>
                        )}
                    </div>

                    <div>
                        <Text>Password</Text>
                        <Input name={'password'} 
                            value={formMik.values.password}
                            onChange={formMik.handleChange('password')}
                            status={formMik.errors.password && 'error'}
                            />
                        {formMik.errors.password&& (
                            <Text>{formMik.errors.password}</Text>
                        )}
                    </div>         
                </div>
            )}

<Space direction="vertical">
          <Space wrap>

            {step === 2 && (
              <div>
                <Button onClick={handlePrev} >Previous</Button>
                <Button type="primary" 
                onClick={() => {
                if (!formMik.values.street) {
                  formMik.setFieldError('street', 'Please enter your Street Address');
                } if (!formMik.values.state){
                  formMik.setFieldError('state', 'Please enter your State');
                } if (!formMik.values.city){
                  formMik.setFieldError('city', 'Please enter your City');
                } if (formMik.values.zipcode){
                  formMik.setFieldError('zipcode', 'Please enter your Zip Code');
                  return;
                } else {
                  handleNext();
                }
              }} >
              Next
              </Button>
              </div>
            )}

            {step === 1 && (
              <div>
                 <Button type="primary" 
                onClick={() => {
                if (!formMik.values.name) {
                  formMik.setFieldError('name', 'Please Input  Your Name');
                } if (!formMik.values.email) {
                  formMik.setFieldError('email', 'Please Input Your Email');
                } if (!formMik.values.dob) {
                  formMik.setFieldError('dob', 'Please Input Your Birthdate [dd-mm-yy]');
                  return;
                } else {
                  handleNext();
                }
              }} >
                Next
                </Button>
              </div>
            )}

            {step === 3 && (
              <div>
                <Button onClick={handlePrev}>Previous</Button>
                <Button htmlType='submit' type="primary" 
                onClick={() => {
                if (!formMik.values.username) {
                  formMik.setFieldError('username', 'Please enter your Username');
                } if (!formMik.values.password) {
                  formMik.setFieldError('email', 'Please enter your Password');
                  return;
                } 
              }} >
                Submit
                </Button>
              </div>

            )}

          </Space>
        </Space>
            </form>
        </>
    )
}

export default AllForm