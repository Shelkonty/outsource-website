interface IValues {
  name: string;
  phone: string;
  email: string;
  siteType: string;
  details: string;
}

export default function validate(values: IValues) {
  let errors = {} as IValues;

  if (!values.name) {
    errors.name = "Имя обязательно";
  }

  if (!values.phone) {
    errors.phone = "Телефон обязателен";
  } else if (!/^\+7\s?\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(values.phone)) {
    errors.phone = "Неверный формат телефона";
  }

  if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Неверный формат email";
  }

  if (!values.siteType) {
    errors.siteType = "Выберите тип сайта";
  }

  return errors;
}