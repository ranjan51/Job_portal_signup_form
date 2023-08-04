import * as Yup from "yup";
export const  SignUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter Your password"),
    Confirm_password:Yup.string().required(" Confirm password is a required field").oneOf([Yup.ref("password"),null],"Passsword must match" ),
    Mobile_number:Yup.string().required("Mobile number is a required field")
});