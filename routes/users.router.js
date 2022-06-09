const express = require('express');

const UsersService = require('./../services/users.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
})

module.exports = router;
