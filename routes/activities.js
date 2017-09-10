const express= require('express');
const router = express.Router();
const Activity = require('./models/activity'),

router.get('/activities', function (req, res) {
  Activity.find({}, function (err, activity) {
    if (err) {
      res.send(err);
    }
    res.json(activity);
  })
})

router.post('/activities', function (req, res) {
  Activty.create(req.body).then()

})

router.get('/actvities/:id', function (req, res) {

})

router.put('actvities/:id', function (req, res) {

})

router.delete('actvities/:id', function (req, res) {

})

router.post('/activities/:id/stats', function (req, res) {

})

router.delete('/stats/:id', function (req, res) {

})

module.exports = router;
