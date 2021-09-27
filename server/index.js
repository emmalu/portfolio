const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const { GoogleSpreadsheet } = require('google-spreadsheet');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
app.get('/api/data', (req, res) => {
    const sheedId = req.query.sheet;
    const creds = process.env;
    const doc = new GoogleSpreadsheet(creds.G_SHEET);
    (async() => {
        await doc.useServiceAccountAuth({
            client_email: creds.G_SHEET_EMAIL,
            private_key: creds.G_SHEET_KEY
        });
        await doc.loadInfo();
        //let sheets = [];
        //for (let i=0; i<doc.sheetCount; i++){
            const sheet = doc.sheetsByIndex[sheedId];
            await sheet.loadHeaderRow();
            const cols = sheet.headerValues;
            const rows = await sheet.getRows();
            const data = [];
            //console.log(cols);
            for (let r in rows){
                let row = rows[r];
                let rowObj = {};
                for (let c in cols){
                    let col = cols[c];
                    let rowValue = row[col];
                    if(rowValue !== "undefined" && rowValue !== undefined && rowValue !== ""){
                        //console.log(col, rowValue);
                        rowObj[col] = rowValue;
                    }
                }
                data.push( rowObj );
            }
            const sheetData = { title: sheet.title, columns: cols, rows: data };
        //}
        //console.log(sheets);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ sheetData }));
    })();
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);