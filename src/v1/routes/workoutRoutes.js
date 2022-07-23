const express = require('express')
const workoutController = require('../../controllers/workoutController')

const router = express.Router()

//* We will call different methods handled by our ./controllers for each different endpoint.

router.get('/', workoutController.getAllWorkouts)

router.get('/:workoutId', workoutController.getOneWorkout)

router.post('/', workoutController.updateOneWorkout)

router.patch('/:workoutId', workoutController.updateOneWorkout)

router.delete('/:workoutId', workoutController.deleteOneWorkout)

module.exports = router
