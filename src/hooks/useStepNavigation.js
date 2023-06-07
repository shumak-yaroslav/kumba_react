import { useState, useEffect, useCallback } from 'react';
import { Form } from 'antd';
import useFormApiData from './useFormApiData';

const useStepFormNavigation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState({});
  const [form] = Form.useForm();
  const { loading, error, data, submitData, reset, success } = useFormApiData();

  useEffect(() => {
    if (currentStep === 0 && !loading && !error && data) {
      const { firstName, lastName, email } = data;
      setFormState((prevState) => ({ ...prevState, ...data }));
      form.setFieldsValue({ firstName, lastName, email });
    }
  }, [currentStep, loading, error, data, form]);

  const handleNext = useCallback(async () => {
    try {
      await form.validateFields();
      const formValues = form.getFieldsValue();
      setFormState((prevState) => ({ ...prevState, ...formValues }));
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error('Form validation error:', error);
    }
  }, [currentStep, form]);

  const handlePrev = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    try {
      await form.validateFields();
      const formValues = form.getFieldsValue();
      setFormState((prevState) => ({ ...prevState, ...formValues }));
      await submitData(formState);
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, formState]);

  return {
    currentStep,
    handlePrev,
    handleNext,
    handleSubmit,
    reset,
    success,
    error,
    loading,
    form,
  };
};
export default useStepFormNavigation;
