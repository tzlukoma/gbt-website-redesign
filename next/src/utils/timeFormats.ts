import moment from 'moment-timezone';
import jstz from 'jstimezonedetect';

export function displayLocalTimeZone(time: string | null, format: string) {
    if (typeof window !== 'undefined') {
        if (!sessionStorage.getItem('timezone')) {
            var tz = jstz.determine() || 'UTC';
            sessionStorage.setItem('timezone', tz.name());
        }
        const currTz = sessionStorage?.getItem('timezone');
        const momentTime = moment(time);
        const tzTime = currTz && momentTime.tz(currTz);
        const formattedTime = tzTime && tzTime.format(format);
        return formattedTime;
    } else {
        return null;
    }
}
