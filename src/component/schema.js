import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
//   number: Yup.number().min(10).max(10).required("please enter your number"),
   
number: Yup.string()
.required("required")
.matches(phoneRegExp, 'Phone number is not valid')
.min(10, "to short")
.max(10, "to long"),
//   password: Yup.string().min(6).required("Please enter your password"),
password: Yup
.string()
.required('Please Enter your password')
.matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
// export default signUpSchema;