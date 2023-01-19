import moment from "moment";

const DATE_TIME_FORMAT = "yyyy-MM-DDThh:mm";

export default function formatDate(date = moment(), format = DATE_TIME_FORMAT) {
    return moment(date).format(format);
}
