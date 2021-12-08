const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./models/database.json')
const db = low(adapter)

/* db.defaults({users:[], records:[], orders:[]})
.write() */

module.exports=db;