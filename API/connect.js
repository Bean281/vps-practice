import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"139.59.252.90",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 