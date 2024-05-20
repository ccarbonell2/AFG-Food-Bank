//Credit Cecilia Carbonell
const express = require('express'),
      Preference = require('./dbFiles/preference'),
      dbOperation = require('./dbFiles/dbOperation'),
      cors = require('cors');

//define port
const API_PORT = process.env.PORT || 5000;
//start server
const app = express();

let client;
let session;
//access body of json from frontend
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//send and receive objects
//use async when need to wait
app.post('/api', async (req, res) => {
    console.log('Called');
    //async await
    const result = await dbOperation.getUsers(req.body.name);
    res.send(result.recordset);
});

app.post('/hello', async(req, res) => {
    await dbOperation.addUser(req.body);
    const result = await dbOperation.getUsers(req.body.Username);
    console.log('Called quit');
    res.send(result.recordset);
});

app.post('/test', async (req,res) => {
    console.log('called test');
    const result = await dbOperation.getPreferences(req.body.name);
    res.send(result.recordset)
})

app.post('/testing', async (req,res) => {
    await dbOperation.addPreference(req.body);
    const result = await dbOperation.getPreferences(req.body.name);
    console.log('called');
    res.send(result.recordset);
})

app.post('/timing', async(req, res) => {
    await dbOperation.addTime(req.body);
    const result = await dbOperation.getTimes(req.body.Username);
    console.log('Called timing');
    res.send(result.recordset);
});

app.post('/timed', async (req, res) => {
    console.log('Called timed');
    //async await
    const result = await dbOperation.getTimes(req.body.name);
    res.send(result.recordset);
});

// // let Janice = new Client(2, 'Janice', 1);

// // //console.log(Janice);

// // // dbOperation.getClients().then(res => {
// // //     console.log(res.recordset);
// // // })

// // dbOperation.addClient(Janice);

let Spam = new Preference(2, 4);
// console.log(Spam);
// dbOperation.addPreference(Spam);

// dbOperation.getPreferences().then(res => {
//     console.log(res.recordset);
// })

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));