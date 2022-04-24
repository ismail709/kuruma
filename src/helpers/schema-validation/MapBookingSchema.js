import * as yup from "yup";
import moment from "moment";

const MapBookingSchema = yup.object().shape({
    start: yup
        .string()
        .required()
        .test({
            name: "isValidDate",
            message: "Please choose a valid Start date and time",
            test: function (value) {
                const start = moment(value);
                return (
                    moment.isMoment(start) &&
                    start < moment().add(1, "year") &&
                    start >= moment()
                );
            },
        }),
    end: yup
        .string()
        .required()
        .test({
            name: "isValidDate",
            message: "Pleasee choose a valid end date and time",
            test: function (value) {
                const start = moment(this.parent.start);
                const end = moment(value);
                return moment.isMoment(end) && end > start;
            },
        })
        .test({
            name: "max",
            message: "You can only book a car for maximum of 7 days",
            test: function (value) {
                const start = moment(this.parent.start);
                const end = moment(value);
                return end.diff(start, "days") <= 7;
            },
        }),
});

export default MapBookingSchema;
