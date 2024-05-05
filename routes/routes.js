const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).render('menu')
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/employee', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).render('employee')
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/employee_create', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json({
        data:  {
            id: 101,
            nama: 'Bejo Sutejo',
            grade: 'Mid',
            Salary: '10 Mio'
        },
        status: 'Successfully Insert'
      })
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/employee_update', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json({
        data:  {
            id: 101,
            nama: 'Bejo Sutejo',
            grade: 'Mid',
            Salary: '11 Mio'
        },
        status: 'Successfully Updated'
      })
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/employee_list', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json([
        {
            id: 100,
            nama: 'Jodio Joestar',
            grade: 'Low',
            Salary: '6 Mio'
        },
        {
            id: 99,
            nama: 'Gappy Josuke',
            grade: 'Low',
            Salary: '8 Mio'
        },
        {
            id: 98,
            nama: 'Johnny Joestar',
            grade: 'Mid',
            Salary: '10 Mio'
        },
        {
            id: 97,
            nama: 'Jolyne Cujoh',
            grade: 'Mid',
            Salary: '10 Mio'
        },
        {
            id: 96,
            nama: 'Giorno Giovanna',
            grade: 'High',
            Salary: '22 Mio'
        }

      ])
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })
  
  router.get('/employee_delete', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json({
        data:  {
            id: 101,
            sts: 0
            },
        status: 'Successfully Deleted'
      })
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/store', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).render('store')
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/store_create', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json({
        data:  {
            id: 21,
            city: 'Suroboyo Town',
            district: 'Wonocolo District',
            m_revenue: '200 Mio'
        },
        status: 'Successfully Insert'
      })
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/store_update', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json({
        data:  {
            id: 21,
            city: 'Suroboyo Town',
            district: 'Wonocolo District',
            m_revenue: '250 Mio'
        },
        status: 'Successfully Updated'
      })
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  router.get('/store_list', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json([
        {
            id: 11,
            city: 'Morioh Town',
            district: 'St Yves',
            m_revenue: '550 Mio'
        },
        {
            id: 12,
            nama: 'Jakarta City',
            district: 'Tebet District',
            m_revenue: '850 Mio'
        },
        {
            id: 13,
            nama: 'Gotham City',
            district: 'Alone Alone a Cell Call a Cone',
            m_revenue: '250 Mio'
        }

      ])
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })
  
  router.get('/store_delete', (req, res) => {
    // res.send('Hello World!')
    try {
      res.status(200).json({
        data:  {
            id: 101,
            sts: 0
            },
        status: 'Successfully Deleted'
      })
    } catch (error) {
        res.status(404).json({
            srv_message: 'Error',
            error: error.message
        })
    }
    return
  })

  module.exports = router
