// INCLUDES
const express = require('express');
const bodyParser = require('body-parser');  


// INIT
const app = express();
const PORT = process.env.PORT || 3000;


// DISPLAY SERVER RUNNING
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Express not to include this header in the responses sent by your application.
app.disable('x-powered-by');

//////////////////////////////////////////////////////
// DISPLAY SERVER RUNNING
//////////////////////////////////////////////////////
// DISPLAY SERVER RUNNING

// public/index.html is served at / by express.static above



app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

//////////////////////////////////////////////////////
// SETUP DB
//////////////////////////////////////////////////////
const CREATE_TABLE_SQL = `
    CREATE TABLE messages (
        id INT NOT NULL AUTO_INCREMENT,
        message TEXT NOT NULL,
        PRIMARY KEY (id)
    );
`;

app.post('/api/table', (req, res, next) => {
    
    connection.promise().query(CREATE_TABLE_SQL)
    .then(() => {
         res.send(`Table created`);
    })
    .catch((error) => {
        res.send(error);
    });
});

//////////////////////////////////////////////////////
// CLEAR DB
//////////////////////////////////////////////////////
const DROP_TABLE_SQL = `
    DROP TABLE IF EXISTS messages;
`;

app.delete('/api/table', (req, res, next) => {
    
    connection.promise().query(DROP_TABLE_SQL)
    .then(() => {
        res.send(`Table dropped`);
    })
    .catch((error) => {
        res.send(error);
    });
});



// app.js or form.js
app.post('/api/message', async (req, res, next) => {
    const message = req.body.message; 

    return formModel
        .postMessage(message)
        .then((result) => {
            console.log(req.body);
           
          
            return res.json({ message, result });
        })
        .catch((error) => {
            console.log(error);
            return res.status(error.status || 500).json({ error: error.message });
        });
});
