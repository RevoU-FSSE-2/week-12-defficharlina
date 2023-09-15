//import React from 'react';
import { Text } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface AddressInformation {
    street: string;
    city: string;
    state: string;
    zipcode: number;
}

const initialValues = {
    street: '',
    city: '',
    state: '',
    zipcode: 0
}

const validationSchema = yup.object({
    street: yup.string().required('Street address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipcode: yup.number().zipcode("Invalid zip code format").required("Zip code is required")
      //.test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isDatelValidator(value) : new yup.ValidationError("Invalid value")),

})

const AddressForm = () => {

    const handleSubmit = (values: AddressInformation) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
          <>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Text>Street Address: </Text>
                    <Input name={'street'}
                        value={formMik.values.street} 
                        onChange={formMik.handleChange('street')}
                        status={formMik.errors.street && 'error'}
                    />
                    {formMik.errors.street && (
                        <Text>{formMik.errors.street}</Text>
                    )}
                </div>
                <div>
                    <Text>City: </Text>
                    <Input name={'city'} 
                        value={formMik.values.city}
                        onChange={formMik.handleChange('city')}
                        status={formMik.errors.city && 'error'}
                        />
                    {formMik.errors.city && (
                        <Text>{formMik.errors.city}</Text>
                    )}
                </div>
                <div>
                    <Text>State: </Text>
                    <Input name={'state'} 
                        value={formMik.values.state}
                        onChange={formMik.handleChange('state')}
                        status={formMik.errors.state && 'error'}
                        />
                    {formMik.errors.state && (
                        <Text>{formMik.errors.state}</Text>
                    )}
                </div>
                <div>
                    <Text>Zip Code: </Text>
                    <Input name={'zipcode'} 
                        value={formMik.values.zipcode}
                        onChange={formMik.handleChange('zipcode')}
                        status={formMik.errors.zipcode && 'error'}
                        />
                    {formMik.errors.zipcode && (
                        <Text>{formMik.errors.zipcode}</Text>
                    )}
                </div>

                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
          </>
    )
}

export default AddressForm





/*const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  name?: string;
  email?: string;
  dob?: string;
};

const validationSchema = yup.object({
    
    email: yup
      .string()      
      .email("Invalid email format")
      .required("Mail is required")
      .test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value")),

    dob: yup
      .string()      
      .date("Invalid date format")
      .required("Date is required")
      .test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isDatelValidator(value) : new yup.ValidationError("Invalid value")),
    
  });

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Full Name"
      name="name"
      rules={[{ required: true, message: 'Please input your full name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Email Address"
      name="email"
      rules={[{ required: true, message: 'Please input your Email Adress!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;*/