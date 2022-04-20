import * as yup from "yup";

const SignUpSchema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(1, "The name is too short")
        .max(50, "The name is too long"),
    email: yup.string().required().email(),
    password: yup
        .string()
        .required()
        .min(8, "The password is too short")
        .max(20, "The password is too long"),
    cpassword: yup
        .string()
        .required()
        .test({
            name: "isMatch",
            message: "Password confirmation does not match the password",
            test: function (value) {
                return this.parent.password === value;
            },
        }),
    phonenumber: yup
        .string()
        .required()
        .min(6, "The phone number is too short")
        .max(50, "The phone number is too long"),
    city: yup
        .string()
        .required()
        .min(1, "please enter a valid city name")
        .max(50, "please enter a valid city name"),
    country: yup
        .string()
        .required()
        .min(1, "please enter a valid country name")
        .max(50, "please enter a valid country name"),
});

export default SignUpSchema;
