import { useState } from "react";

function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
