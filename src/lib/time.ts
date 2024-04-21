import moment from "moment";

export const timeFormat = (time: string) => moment(time).format("DD MMM YY");
