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

  router.put('/api/employees/:id', (req, res) => {
    return res.json({})
  })

  router.delete('/api/employees', (req, res) => {
    return res.json([])
  })

  router.delete('/api/employees/:id', (req, res) => {
    return res.json({})
  })

  return router
}
