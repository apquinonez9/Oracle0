require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morganBody=require("morgan-body");
const loggerStream=require("./utils/handleLogger");
const dbConnectNosql = require('./config/mongo.js');
const {dbConnectMysql} = require('./config/mysql');
const app = express();

const ENGINE_DB=process.env.ENGINE_DB;
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app,{
    noColors:true,
    stream:loggerStream,
    skip:function(req,res){
        return res.statusCode<400;
    },
});
const port = process.env.PORT || 3003;
/**
 * Aqui invocamos las rutad
 */
app.use("/api", require("./routes"));
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

(ENGINE_DB==='nosql') ? dbConnectNosql() : dbConnectMysql();
