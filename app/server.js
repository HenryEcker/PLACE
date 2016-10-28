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
        return (value.location === "RASC") || (value.location === "mobileRASC");
    });

    interactions.outOfRascInteractions.header = "Out Of Rasc Interactions";
    interactions.outOfRascInteractions.logs = _.filter(myInteractions, function(value) {
        return value.location === "outOfRASC";
    });
    return interactions;
    //emulateServerReturn(interactions, cb);
}

export function getRequirements(user){
  var requirements = readDocument('requirements', readDocument('users',user).position);
  return requirements;
}

export function getInteractionTemplate() {
    return readDocument("templates", "interactions")
}

export function postInteraction(user, resident, location, date, timeSpent, topic, inDepthInfo) {
    var blankInteraction = readDocument("templates", "interactions");
    blankInteraction.resident = resident;
    blankInteraction.location = location;
    blankInteraction.date = date;
    blankInteraction.timeSpent = timeSpent;
    blankInteraction.topic = topic;
    blankInteraction.inDepthInfo = inDepthInfo;
    var filledOutInteraction = blankInteraction;
    var newDoc = addDocument('interactions', filledOutInteraction);
    var curUser = readDocument('users',user);
    curUser.log = curUser.logs.concat(newDoc._id);
    writeDocument('users',user);
}

export function getUser(user, cb) {
    return readDocument('users', user);
    //emulateServerReturn(readDocument('users', user), cb);
}
