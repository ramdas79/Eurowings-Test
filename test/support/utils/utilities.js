export default class Utilities {

    getDate(futureDate) {
        const date = new Date();
        date.setDate(date.getDate() + futureDate);
        const i=0;
        if ( i <10 )
            return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)) + "-" + ("0" + (date.getDate()));
    }
}