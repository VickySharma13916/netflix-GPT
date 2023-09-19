export const checkvalidate = (email, password, phoneNumber, fullName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // let isPhoneValid
  //   if (phoneNumber) {
  //      isPhoneValid =
  //       /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
  //         phoneNumber
  //       );
  //       return
  //   }
  //   let isFullNameValid;
  //   if (fullName) {
  //     isFullNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
  //       fullName
  //     );
  //     return isFullNameValid;
  //   }

  if (!isEmailValid) return "Email Id is not Valid.";
  if (!isPasswordValid) return "Password is not Valid.";
  //   if (!isPhoneValid) return "Phone Number is not Valid.";
  //   if (!isFullNameValid) return "Full Name should not be empty.";

  return null;
};
