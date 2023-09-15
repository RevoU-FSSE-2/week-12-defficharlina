//import React from 'react';
import { Text } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface AccountInformation {
    username: string;
    password: string;
}

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object({
    username: yup.string().required('Enter your username'),
    password: yup.number().password("Must be strong password").required("Enter your password")
      //.test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isDatelValidator(value) : new yup.ValidationError("Invalid value")),

})

const AccountForm = () => {

    const handleSubmit = (values: AccountInformation) => {
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
                    <Text>Username: </Text>
                    <Input name={'username'}
                        value={formMik.values.username} 
                        onChange={formMik.handleChange('username')}
                        status={formMik.errors.username && 'error'}
                    />
                    {formMik.errors.username && (
                        <Text>{formMik.errors.username}</Text>
                    )}
                </div>
                <div>
                    <Text>Password: </Text>
                    <Input name={'password'} 
                        value={formMik.values.password}
                        onChange={formMik.handleChange('password')}
                        status={formMik.errors.password && 'error'}
                        />
                    {formMik.errors.password && (
                        <Text>{formMik.errors.password}</Text>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
          </>
    )
}

export default AccountForm





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