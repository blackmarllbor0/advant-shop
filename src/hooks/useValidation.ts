import { KeyboardEvent } from "react";

export const useValidation = () => {
  const error: string = "#f00",
    normal: string = "#e2e3e4";

  const changeInput = (
    event: KeyboardEvent<HTMLInputElement>,
    name?: string,
    surname?: string,
    email?: string,
    phone?: string,
    password?: string,
    confPassword?: string
  ) => {
    const { style } = event.currentTarget,
      validEmail: RegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      validPhone: RegExp =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    switch (event.currentTarget.name) {
      case "name":
        return (style.borderColor =
          name!.length < 2 || name!.length > 18 ? error : normal);
      case "surname":
        return (style.borderColor =
          surname!.length < 2 || surname!.length > 18 ? error : normal);
      case "email":
        return (style.borderColor = email!.toLocaleLowerCase().match(validEmail)
          ? normal
          : error);
      case "phone":
        return (style.borderColor = phone!.match(validPhone) ? normal : error);
      case "password":
        return (style.borderColor = password!.length < 6 ? error : normal);
      case "confPassword":
        return (style.borderColor =
          password! !== confPassword! ? error : normal);
      default:
        return;
    }
  };

  return { changeInput, error, normal };
};
