import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */

function emulateServerReturn(data, cb) {
    setTimeout(() => {
        cb(data);
    }, 4);
}

//const sumValues = (obj) => Object.keys(obj).reduce((acc, value) => acc + obj[value], 0);

export function getLogs(user, cb) {
    var logsList = readDocument('users',user);
    var myInteractions = _.map(logsList.logs, ((id) => readDocument('interactions', id)));
    var interactions = {
        rascInteractions: {
            header: {},
            logs: {}
        },
        outOfRascInteractions: {
            header: {},
            logs: {}
        }
    };

    interactions.rascInteractions.header = "RASC Interactions";
    interactions.rascInteractions.logs = _.filter(myInteractions, function(value) {
        return (value.loc === "rasc") || (value.loc === "mobrasc");
    });

    interactions.outOfRascInteractions.header = "Out Of Rasc Interactions";
    interactions.outOfRascInteractions.logs = _.filter(myInteractions, function(value) {
        return value.loc === "outofrasc";
    });
    emulateServerReturn(interactions, cb);
}

export function getRequirements(user,cb){
  var requirements = readDocument('requirements', readDocument('users',user).position);
  emulateServerReturn(requirements,cb);
}

export function getInteractionTemplate() {
    return readDocument("templates", "interactions")
}


export function getProgress(user,cb) {
    var curUser = readDocument('users',user);
    var requirements = readDocument('requirements',curUser.position);
    var progress = {
        total: {
            minutesDone: 0,
            title: "",
            minutesRequired: 0
        },
        rasc: {
            minutesDone: 0,
            title: "",
            minutesRequired: 0
        },
        outofrasc: {
            minutesDone: 0,
            title: "",
            minutesRequired: 0
        }
    };
    //Total Time
    progress.total.minutesDone = curUser.progress.total.minutesDone;
    progress.total.title = requirements.total.title;
    progress.total.minutesRequired = requirements.total.minutes;
    //Rasc Hours
    progress.rasc.minutesDone = curUser.progress.rasc.minutesDone;
    progress.rasc.title = requirements.rasc.title;
    progress.rasc.minutesRequired = requirements.rasc.minutes;
    //Out of Rasc
    progress.outofrasc.minutesDone = curUser.progress.outofrasc.minutesDone;
    progress.outofrasc.title = requirements.outofrasc.title;
    progress.outofrasc.minutesRequired = requirements.outofrasc.minutes;
    emulateServerReturn(progress,cb);
}

export function postInteraction(user, resident, loc, date, timeSpent, topic, inDepthInfo) {
    var blankInteraction = readDocument("templates", "interactions");
    blankInteraction.resident = resident;
    blankInteraction.loc = loc;
    blankInteraction.date = date;
    blankInteraction.timeSpent = timeSpent;
    blankInteraction.topic = topic;
    blankInteraction.inDepthInfo = inDepthInfo;
    var filledOutInteraction = blankInteraction;
    var newDoc = addDocument('interactions', filledOutInteraction);
    var curUser = readDocument('users',user);
    curUser.logs = curUser.logs.concat(newDoc._id);
    curUser.progress.total.minutesDone += filledOutInteraction.timeSpent;
    if(filledOutInteraction.loc === "outofrasc"){
      curUser.progress.outofrasc.minutesDone += filledOutInteraction.timeSpent;
    } else {
        curUser.progress.rasc.minutesDone += filledOutInteraction.timeSpent;
    }
    writeDocument('users',curUser);
}

export function getUser(user, cb) {
    emulateServerReturn(readDocument('users', user), cb);
}
