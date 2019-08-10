import { MongoClient } from 'mongodb'

let _db = null

const ensureConnect = () => {
  if (_db) {
    return Promise.resolve(_db)
  } else {
    const url = 'mongodb://localhost:27017'
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
