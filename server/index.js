const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "bditens",
    port: 3306,
});

app.post("/item", (req, res) => {
    console.log("bunda")
    const { texto } = req.body;

    let SQL = "INSERT INTO listaitens ( itens ) VALUES (?)";

    db.query(SQL, texto, (err, result) => {

        if (err) {

            console.log(err);
            return;

        } else {

            console.log('Inserção realizada com sucesso!');

            res.send('Inserção realizada com sucesso!')

        }

    });
    
});

app.get("/item", (req, res) => {

    let SQL = "SELECT * FROM listaitens";

    db.query(SQL, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);        }
    });

});

app.delete("/item/:id", (req, res) => {

    const {id} = req.params;
    console.log(`O item com o id: ${id} foi deletado com sucesso!`);

    let SQL = "DELETE FROM listaitens WHERE ( `id` = ? )";

    db.query(SQL, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});