import express, { response } from "express"
import mysql from "mysql"
import cors from "cors"
import jwt, { hash } from "bcrypt"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const salt = 10;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

app.post('/SignUp', (req, res) => {
    const sql = "INSERT INTO login (`username`,`password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "ERROR for hassing password"});
        const values = [
            req.body.username,
            hash 
        ]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Inserting data Error in server"});
            return resjson({Status: "Success"});
        })
    })
})

app.listen(8081, () => {
    console.log("Running.....");
})