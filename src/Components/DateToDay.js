import React  from 'react';
import Moment from '../../node_modules/moment';

const days = (date) => {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(date);
    var secondDate = Date.now()
    var twoDate = new Date(secondDate);
    console.log(firstDate, "1")
    console.log(twoDate,"2")
    
    var diffDays = Math.round(Math.abs((firstDate - secondDate) / (oneDay)));

    const daysString = diffDays.toString();
    console.log(daysString)
    return daysString
}
export default days;