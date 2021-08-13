export default class Utilities {

    getDate(futureDate) {
        const date = new Date();
        date.setDate(date.getDate() + futureDate);
        
        if ( date < 10 ){
            return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)) + "-" + ("0" + (date.getDate()));
    }
        else {
            return date.getFullYear() + "-" +  ("0" + (date.getMonth() + 1)) + "-" + (date.getDate());

    }
}