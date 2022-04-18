import * as yup from "yup"

export const SignInSchema = yup.object().shape({
    email:yup.string().required("Please enter your email").email(),
    password:yup.string().required("Please enter your password").min(4).max(20)
});