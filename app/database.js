import React from 'react';
import ReactDOM from 'react-dom';

var initialData = {
    "users": {
        "1": {
            "_id": 1,
            "name": "Henry",
            "position": "PM",
            "positionTitle": "Peer Mentor",
            "location": "Dickinson 4th Floor",
            "progress": {
                "total": {
                    "title": "Total Hours",
                    "minutesDone": 170,
                    "minutesRequired": 450
                },
                "rasc": {
                    "title": "RASC Hours",
                    "minutesDone": 110,
                    "minutesRequired": 150
                },
                "outofrasc": {
                    "title": "Out of RASC Hours",
                    "minutesDone": 60,
                    "minutesRequired": 300
                }
            },
            "log": 1
        }
    }
}

/*
var initialData = {
    //Requirements for everyone
    "requirements": {
        "1": {
            "_id": 1,
            "title": "Total Hours",
            "minutes": 450
        },
        "2": {
            "_id": 2,
            "title": "RASC Hours",
            "minutes": 150
        },
        "3": {
            "_id": 3,
            "title": "Out Of RASC Hours",
            "minutes": 300
        }
    },
    //Initiatives for everyone
    "initiatives": {
        "pm": {}
    },
    //all users
    "users": {
        "1": {
            "_id": 1,
            "position": "Peer Mentor",
            "name": "Henry Ecker",
            "progress": {
                "total": {
                    "title": "Total Hours",
                    "minutesDone": 170,
                    "minutesLeft": 450 - 170,
                    "percent": 170 / 450
                },
                "rasc": {
                    "title": "RASC Hours",
                    "minutesDone": 110,
                    "minutesLeft": 150 - 110,
                    "percent": 110 / 150

                },
                "outOfRasc": {
                    "title": "Out Of RASC Hours",
                    "minutesDone": 60,
                    "minutesLeft": 300 - 60,
                    "percent": 60 / 300
                }
            },
            "requirements": 1,
            "location": "Dickinson 4th Floor",
            "log": 1
        }
    },
    //userLogs
    "userLogs": {
        "1": {
            "_id": 1,
            "interactionList": [
                1,
                2,
                3,
                4,
                5,
                6
            ]
        }
    },
    //All Interactions
    "interactions": {
        "1": {
            "_id": 1,
            "location": "RASC",
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
};
*/

var data = JSON.parse(localStorage.getItem('place_data'));
if (data === null) {
    data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
    // Clone the data. We do this to model a database, where you receive a
    // *copy* of an object and not the object itself.
    return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
    var id = changedDocument._id;
    // Store a copy of the object into the database. Models a database's behavior.
    data[collection][id] = JSONClone(changedDocument);
    // Update our 'database'.
    localStorage.setItem('place_data', JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
    var collection = data[collectionName];
    var nextId = Object.keys(collection).length;
    while (collection[nextId]) {
        nextId++;
    }
    newDoc._id = nextId;
    writeDocument(collectionName, newDoc);
    return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
    localStorage.setItem('place_data', JSON.stringify(initialData));
    data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
    render() {
        return (
            <button className="btn btn-default" type="button" onClick={() => {
                resetDatabase();
                window.alert("Database reset! Refreshing the page now...");
                document.location.reload(false);
            }}>Reset Mock DB</button>
        );
    }
}

ReactDOM.render(
    <ResetDatabase/>, document.getElementById('place-db-reset'));
