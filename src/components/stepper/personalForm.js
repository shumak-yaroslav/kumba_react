import { Button, Form, Input } from 'antd';
import React from 'react';
import { text } from '../../constants/styles';

const PersonalForm = ({ form, onFinish, onNext }) => {
  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="firstName"
        label={<span style={text}>First Name</span>}
        rules={[{ required: true, message: 'Please enter your first name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label={<span style={text}>Last Name</span>}
        rules={[{ required: true, message: 'Please enter your last name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label={<span style={text}>Email</span>}
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" onClick={onNext}>
        Next
      </Button>
    </Form>
  );
};
export default PersonalForm;
