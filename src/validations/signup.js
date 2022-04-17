import * as yup from "yup"

export const signupSchema = yup.object().shape({
    username: yup.string().required().min(1,"The name is too short").max(50,"The name is too long"),
    email:yup.string().required().email(),
    password:yup.string().required().min(4,"The password is too short").max(20,"The password is too long"),
    phonenumber: yup.string().required().min(6,"The phone number is too short").max(50,"The phone number is too long"),
    city:yup.string().required().min(1,'please enter a valid city name').max(50,'please enter a valid city name'),
    country:yup.string().required().min(1,"please enter a valid country name").max(50,"please enter a valid country name"),
});