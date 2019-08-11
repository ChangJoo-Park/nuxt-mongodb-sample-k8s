import express from 'express'
import bodyParser from 'body-parser'
import { mongo } from './mongodb'
import { ObjectId } from 'mongodb'

export const createRouter = () => {
  const router = express.Router()
  router.use(bodyParser.json())

  router.get('/api/employees', (req, res) => {
    mongo()
      .then(db => db.collection('employee').find().toArray())
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })

  router.post('/api/employees', (req, res) => {
    const { name = '' } = req.body
    mongo()
      .then(db => db.collection('employee').insertOne({ name }))
      .then(result => {
        if (!!result['ops'][0]) {
          return result['ops'][0]
        } else {
          return res.status(500).json({ message: 'Create Error'})
        }
      })
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })

  router.get('/api/employees/:_id', (req, res) => {
    const { _id } = req.params
    mongo()
      .then(db => db.collection('employee').findOne({ _id: ObjectId(_id) }))
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err))
  })

  router.put('/api/employees/:_id', (req, res) => {
    const { _id } = req.params
    const { _id: bodyId, name } = req.body

    if (_id !== bodyId) {
      res.status(400).json({message: 'Error'})
    }

    const findQuery = { _id: ObjectId(_id) }
    const modifyQuery = { $set: { name } }

    mongo()
      .then(db => db.collection('employee').updateOne(findQuery, modifyQuery))
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err))
  })

  router.delete('/api/employees', (req, res) => {
    return res.json([])
  })

  router.delete('/api/employees/:_id', (req, res) => {
    const { _id } = req.params
    mongo()
      .then(db => db.collection('employee').deleteOne({ _id: ObjectId(_id) }))
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err))
  })

  return router
}
