const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Burgerz34",
    database:"bamazon"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    // creating a string which contains data captured in table
    let sql="Select * from products";
    con.query(sql,
        function (err,results){
            if (err) throw err;
            console.log(results);
        }
    );
   // process.exit(0);
});
