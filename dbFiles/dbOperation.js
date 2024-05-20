//Credit Cecilia Carbonell
const config = require('./dbConfig'),
      sql = require('mssql');

const getUsers = async(username) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(`SELECT * FROM Users WHERE Username = '${username}'`)
        console.log(clients);
        return clients;
    }
    catch(error) {
        console.log(error);
    }
}

const addUser = async(User) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(`INSERT INTO Users (Username, Password, UserType, HouseNumber) VALUES 
        ('${User.Username}', '${User.Password}', '${UserType}', ${HouseNumber})`)
        console.log(clients);
        return clients;
    }
    catch(error) {
        console.log(error);
    }
}

const getPreferences = async(userID) => {
    try {
        let pool = await sql.connect(config);
        let preferences = await pool.request().query(`SELECT * FROM Preference WHERE User_ID = ${userID}`)
        console.log(preferences);
        return preferences;
    }
    catch(error) {
        console.log(error);
    }
}

const addPreference = async(Preference) => {
    try {
        let pool = await sql.connect(config);
        let preferences = await pool.request().query(`INSERT INTO Preference (User_ID, Food_ID) VALUES
        (${Preference.User_ID}, ${Preference.Food_ID})`)
        return preferences;
    }
    catch(error) {
        console.log(error);
    }
}

const getTimes = async(username) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(`SELECT * FROM PickUps WHERE Users_ID = '${username}'`)
        console.log(clients);
        return clients;
    }
    catch(error) {
        console.log(error);
    }
}

const addTime = async(User) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(`INSERT INTO PickUps (Users_ID, Time) VALUES 
        (${User.Users_ID}, '${User.Time}'`)
        console.log(clients);
        return clients;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    addPreference,
    addTime,
    addUser,
    getPreferences,
    getTimes,
    getUsers
}