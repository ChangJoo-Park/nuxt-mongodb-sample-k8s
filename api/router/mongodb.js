import { MongoClient } from 'mongodb'

let _db = null

const mongoHost = process.env.MONGO_HOST || 'localhost'
const ensureConnect = () => {
  if (_db) {
    return Promise.resolve(_db)
  } else {
    const url = `mongodb://${mongoHost}:27017?repliaceSet=rs0`
    const client = new MongoClient(url, { useNewUrlParser: true })
    return client.connect()
      .then(_ => {
        _db = client.db('my-employee')
        return _db
      })
      .catch(err => {
        console.error(err)
        client.close()
      })
  }
}

export function mongo () {
  return ensureConnect()
}
