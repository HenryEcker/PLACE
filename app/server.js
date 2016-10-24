//import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */

/*
function emulateServerReturn(data, cb) {
    setTimeout(() => {
        cb(data);
    }, 4);
}

export function getUser(user, cb) {
    emulateServerReturn(readDocument('users',user));
    //emulateServerReturn(readDocument('users',user),cb);
}
*/

var user = {
    "_id": 1,
    "name": "Henry",
    "position": "pm",
    "positionTitle": "Peer Mentor",
    "location": "Dickinson 4th Floor",
    "progress": {
        "total": {
            "requirement": 1,
            "title": "",
            "minutesDone": "",
            "minutesRequired": ""
        },
        "rasc": {
            "requirement": 2,
            "title": "",
            "minutesDone": "",
            "minutesRequired": ""
        },
        "outofrasc": {
            "requirement": 3,
            "title": "",
            "minutesDone": "",
            "minutesRequired": ""
        }
    },
    "logs": [
        1,2,3,4,5,6
    ]
}

var requirements = {
    "total": {
        "_id": 1,
        "title": "Total Hours",
        "minutes": 450
    },
    "rasc": {
        "_id": 2,
        "title": "RASC Hours",
        "minutes": 150
    },
    "outofrasc": {
        "_id": 3,
        "title": "Out Of RASC Hours",
        "minutes": 300
    }
};

var interactions = {
    "1": {
        "_id": 1,
        "location": "mobileRASC",
        "date": "10/17/16",
        "resident": "John Smith",
        "timeSpent": 45,
        "topic": "Stress Management",
        "inDepthInfo": "Concerned about upcoming Test"
    },
    "2": {
        "_id": 2,
        "location": "outOfRASC",
        "date": "10/18/16",
        "resident": "Jane Doe",
        "timeSpent": 15,
        "topic": "Career Exploration",
        "inDepthInfo": "Wants to be a doctor"
    },
    "3": {
        "_id": 3,
        "location": "outOfRASC",
        "date": "10/19/16",
        "resident": "Tim Matthews",
        "timeSpent": 55,
        "topic": "Stress Management",
        "inDepthInfo": "Concerned about upcoming Test"
    },
    "4": {
        "_id": 4,
        "location": "RASC",
        "date": "10/20/16",
        "resident": "Max Smith",
        "timeSpent": 75,
        "topic": "Stress Management",
        "inDepthInfo": "Concerned about upcoming Test"
    },
    "5": {
        "_id": 5,
        "location": "outOfRASC",
        "date": "10/21/16",
        "resident": "Trevor Davidson",
        "timeSpent": 85,
        "topic": "Study Skills",
        "inDepthInfo": "Helped Prepare for upcoming Test"
    },
    "6": {
        "_id": 6,
        "location": "outOfRASC",
        "date": "10/22/16",
        "resident": "Kayla Jones",
        "timeSpent": 45,
        "topic": "Stress Management",
        "inDepthInfo": "Concerned about upcoming Test"
    }
}

const sumValues = (obj) => Object.keys(obj).reduce((acc, value) => acc + obj[value], 0);

var myInteractions = _.map(user.logs, ((id) => interactions[id]));

var rascInteractions = _.filter(myInteractions, function(value) {
    return (value.location === "RASC") || (value.location === "mobileRASC");
});
var rascInteractionsTime = _.map(rascInteractions, function(value) {
    return value.timeSpent;
})

var outOfRascInteractions = _.filter(myInteractions, function(value) {
    return value.location === "outOfRASC";
});
var outOfRascInteractionsTime = _.map(outOfRascInteractions, function(value) {
    return value.timeSpent;
})
var totalInteractionsTime = _.map(myInteractions, function(value) {
    return value.timeSpent;
})

export function getUser() {
    //Total Time
    user.progress.total.minutesDone = sumValues(totalInteractionsTime);
    user.progress.total.title = requirements.total.title;
    user.progress.total.minutesRequired = requirements.total.minutes;
    //Rasc Hours
    user.progress.rasc.minutesDone = sumValues(rascInteractionsTime);
    user.progress.rasc.title = requirements.rasc.title;
    user.progress.rasc.minutesRequired = requirements.rasc.minutes;
    //Out of Rasc
    user.progress.outofrasc.minutesDone = sumValues(outOfRascInteractionsTime);
    user.progress.outofrasc.title = requirements.outofrasc.title;
    user.progress.outofrasc.minutesRequired = requirements.outofrasc.minutes;
    return user;
}

export function getseparatedInteractions() {
    var separatedInteractions = {};
    separatedInteractions.rascInteractions = {};
    separatedInteractions.rascInteractions.interactions = rascInteractions;
    separatedInteractions.rascInteractions.header = "RASC Interactions";
    separatedInteractions.outOfRascInteractions = {};
    separatedInteractions.outOfRascInteractions.interactions = outOfRascInteractions;
    separatedInteractions.outOfRascInteractions.header = "Out Of Rasc Interactions";
    return separatedInteractions;
}
