import { Button, DatePicker, Form } from 'antd';
import React from 'react';
import { text } from '../../constants/styles';

const SubmitForm = ({ form, onFinish, onPrev }) => {
  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="dateTime"
        label={<span style={text}>Date and Time</span>}
        rules={[{ required: true, message: 'Please select a date and time' }]}
      >
        <DatePicker format="YYYY-MM-DD HH:mm" style={{ marginRight: 8 }} />
      </Form.Item>
      <Button type="primary" onClick={onPrev} style={{ marginRight: 8 }}>
        Previous
      </Button>
      <Button type="primary" onClick={onFinish}>
        Submit
      </Button>
    </Form>
  );
};
export default SubmitForm;
