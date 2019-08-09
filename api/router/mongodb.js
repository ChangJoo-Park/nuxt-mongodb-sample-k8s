import { MongoClient } from 'mongodb'

let _db = null

const ensureConnect = () => {
  if (_db) {
    return Promise.resolve(_db)
  } else {
    return new Promise((resolve, reject) => {
      MongoClient.connect('mongodb://127.0.0.1:27017/employee', {
        useNewUrlParser: true
      }, (err, db) => {
        if (!err) {
          _db = db
          resolve(db)
        } else {
          reject(err)
        }
      })
    })
  }
}

export function mongo (cb) {
  return ensureConnect().then(db => cb(db))
}
