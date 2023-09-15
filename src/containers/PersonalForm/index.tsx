//import React from 'react';
import { Text } from '../../components';
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'

interface PersonalInformation {
    name: string;
    email: string;
    dob: string;
}

const initialValues = {
    name: '',
    email: '',
    dob: ''
}

const validationSchema = yup.object({
    
    email: yup
      .string()      
      .email("Invalid email format")
      .required("Mail is required"),
      //.test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value")),

    dob: yup
      .string().dob("Invalid date format").required("Date is required")
      //.test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isDatelValidator(value) : new yup.ValidationError("Invalid value")),
})

const PersonalForm = () => {

    const handleSubmit = (values: PersonalInformation) => {
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
                    <Text>Email Address: </Text>
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
                    <Text>Date Of Birth: </Text>
                    <Input name={'dob'} 
                        value={formMik.values.dob}
                        onChange={formMik.handleChange('dob')}
                        status={formMik.errors.dob && 'error'}
                        />
                    {formMik.errors.dob && (
                        <Text>{formMik.errors.dob}</Text>
                    )}
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </form>
          </>
    )
}

export default PersonalForm

/*
import { useState } from "react";
import { Table } from "../../components";
import { RegisterForm } from "../../components";
import { Dispatch, SetStateAction } from "react";

interface DataUser {
  name?: string;
  email?: string;
  gender?: "L" | "P";
  address?: string;
}

interface Props {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Register = ({ page, setPage }: Props) => {
  const [form, setForm] = useState<DataUser>();
  const data: DataUser[] = [
    {
      name: "fulan",
      email: "fulan@example.com",
      gender: "L",
      address: "Jl. Pahlawan",
    },
  ];

  const renderTableBody = () => {
    return (
      <>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <RegisterForm setForm={setForm} form={form} />
      <Table
        headers={["Nama", "Email", "Gender", "Address"]}
        children={renderTableBody()}
      />
      {page == 2 && (
        <div>
          <button onClick={() => setPage(1)}>Kembali</button>
          <button onClick={() => setPage(3)}>Next</button>
        </div>
      )}
    </>
  );
};

export default Register;
*/





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