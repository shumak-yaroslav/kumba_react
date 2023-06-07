import React from 'react';
import { Steps } from 'antd';

import PersonalForm from './personalForm';
import SubmitForm from './submitForm';
import ErrorComponent from '../error';
import Success from '../success';
import { text } from '../../constants/styles';
import useStepFormNavigation from '../../hooks/useStepNavigation';

const FormStep = () => {
  const {
    loading,
    error,
    success,
    reset,
    handleSubmit,
    handlePrev,
    handleNext,
    form,
    currentStep,
  } = useStepFormNavigation();

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorComponent onPress={reset} />;
  if (success) return <Success onPress={reset} />;

  const renderStepContent = (step) => {
    return step === 0 ? (
      <PersonalForm form={form} onFinish={handleNext} onNext={handleNext} />
    ) : (
      <SubmitForm form={form} onFinish={handleSubmit} onPrev={handlePrev} />
    );
  };

  return (
    <div>
      <Steps
        style={{ paddingBottom: 16 }}
        current={currentStep}
        className="custom-steps"
        items={[
          { title: <span style={text}>First Part</span> },
          { title: <span style={text}>Second Part</span> },
        ]}
      />
      {renderStepContent(currentStep)}
    </div>
  );
};

export default FormStep;
