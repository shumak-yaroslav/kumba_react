import { useState, useEffect } from 'react';
import { createData, getPrefillData } from '../services/api';

const useFormApiData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [prefillData, setPrefillData] = useState({});
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPrefillData();
        setLoading(false);
        setPrefillData(data);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const submitData = async (formData) => {
    setLoading(true);
    try {
      const response = await createData(formData);
      setResponseData(response.data);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setError(error);
    }
    setLoading(false);
  };

  const reset = async () => {
    setError(null);
    setSuccess(null);
    setPrefillData({});
  };

  return {
    success,
    error,
    loading,
    data: prefillData,
    submitData,
    responseData,
    reset,
  };
};
export default useFormApiData;
