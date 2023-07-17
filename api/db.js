import mysql from "mysql";


export const db = mysql.createConnection({
    host: "localhost",
    port: 8800,
    user: "root",
    password: "5022",
    database: "cad_user",
});