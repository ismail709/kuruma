import * as yup from "yup"

export const signinSchema = yup.object().shape({
    email:yup.string().required().email(),
    password:yup.string().required().min(4).max(20)
});