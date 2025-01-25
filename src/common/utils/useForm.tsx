import { useState } from "react";
import { notification } from "antd";

interface IValues {
  name: string;
  phone: string;
  email: string;
  siteType: string;
  details: string;
}

const initialValues: IValues = {
  name: "",
  phone: "",
  email: "",
  siteType: "",
  details: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formState.values);
    setFormState(prev => ({ ...prev, errors }));

    if (Object.values(errors).every(error => error === "")) {
      notification.success({
        message: "Успешно",
        description: "Ваше сообщение отправлено!",
      });
      setFormState({ values: { ...initialValues }, errors: { ...initialValues } });
    }
  };

  const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      errors: { ...prev.errors, [name]: "" },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};