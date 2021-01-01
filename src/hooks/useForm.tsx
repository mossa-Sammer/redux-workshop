import { useState } from 'react';

const useForm = (initValues: Record<string, string>) => {
  const [form, setForm] = useState({ ...initValues });
  return {
    form,
    resetForm: () => {
      const obj: any = {};
      for (const key of Object.keys(form)) {
        obj[key] = '';
      }
      setForm(obj);
    },
    setForm: ({
      target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...initValues,
        [name]: value,
      });
    },
  };
};

export default useForm;
