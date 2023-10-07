import express from 'express'
import mysql from 'mysql2'
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
dotenv.config()
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());



const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

// .promise()

app.post('/SignUp', (req, res) => {
    const sql = "INSERT INTO USERS (`username`, `password`) VALUES (?, ?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ Error: "Error hashing password" });
        }
        const values = [
            req.body.username,
            hash
        ];
        pool.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ Error: "Error inserting data into the database" });
            }
            return res.json({ Status: "Success" });
        });
    });
});

app.post('/LogIn', (req, res) => {
    const sql = "SELECT * FROM USERS WHERE username = ?";
    pool.query(sql, [req.body.username], (err, data) => {
        if (err) {
            console.error("Login error in server:", err);
            return res.status(500).json({ Error: "Login error in server" });
        }

        if (data.length === 0) {
            console.error("No username existed:", req.body.username);
            return res.status(404).json({ Error: "No username existed" });
        }

        bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
            if (err) {
                console.error("Password compare error:", err);
                return res.status(500).json({ Error: "Password compare error" });
            }
            if (response) {
                return res.json({ Status: "Success" });
            } else {
                return res.json({ Status: "Password not matched" });
            }
        });
    });
});







app.listen(8081, () => {
    console.log("Running.....");
})


// async function getUsers() {

//     const [rows] = await pool.query("SELECT * FROM USERS")
//     return rows
// }

// async function getUser(id) {
//     const [rows] = await pool.query(`
//     SELECT *
//     FROM USERS
//     WHERE id = ? 
//     `, [id])
//     return rows
// }

// async function createUser(username, password) {
//     const [result] = await pool.query(`
//     INSERT INTO USERS (username, password)
//     VALUES (?, ?)
//     `, [username, password])
//     return result
// }

// const result = await createUser('test', 'test')
// console.log(result)





// app.post('/SignUp', (req, res) => {
//     const sql = "INSERT INTO login (`username`,`password`) VALUES (?)";
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//         if(err) return res.json({Error: "ERROR for hassing password"});
//         const values = [
//             req.body.username,
//             hash 
//         ]
//         db.query(sql, [values], (err, result) => {
//             if(err) return res.json({Error: "Inserting data Error in server"});
//             return resjson({Status: "Success"});
//         })
//     })
// })

