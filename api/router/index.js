import express from 'express'
import bodyParser from 'body-parser'
import { mongo } from './mongodb'

export const createRouter = () => {
  const router = express.Router()
  router.use(bodyParser.json())

  router.get('/api/employees', (req, res) => {
    mongo()
      .then(db => {
        const collection = db.collection('employee')
        collection.find().toArray()
          .then(result => {
            res.json([])
          })
      })
      .catch(err => {
        res.json(err)
    })
  })

  router.post('/api/employees', (req, res) => {
    return res.json([])
  })

  router.get('/api/employees/:id', (req, res) => {
    return res.json({})
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
