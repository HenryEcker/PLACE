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

function processInteractions(logID){
  var log = readDocument('userLogs',logID);
  log.interactionList = readDocument('interactionList',log);
  log.interactionList = log.interactionList.map((id)=>readDocument('interactions',id));
  log.rascInteractionList.filter(log.interactionList.location==="RASC");
  log.outOfRascInteractionList.filter(log.interactionList.location!=="RASC");
  return log;
}

export function getInteractions(user,cb){
  var userID = readDocument('users',user);
  var interactions = processInteractions(userID);
  emulateServerReturn(interactions,cb);
}

export function getUser(user,cb){
  emulateServerReturn(readDocument('users',user),cb);
}
