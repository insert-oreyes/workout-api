const fs = require('fs')

//* This overwrites the datas in db.json (persist the data)
const saveToDatabase = (DB) => {
  fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
    encoding: 'utf-8',
  })
}

module.exports = { saveToDatabase }
