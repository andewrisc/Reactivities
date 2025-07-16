import { type DateArg, format } from "date-fns";

export function formatDate(date: DateArg<Date>) {
    return format(date, 'dd MMMdd MMM yyyy h:mm a')
}
