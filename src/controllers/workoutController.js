const workoutService = require('../services/workoutService')

//· GET ALL WORKOUT
const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

//· GET ONE WORKOUT
const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req
  if (!workoutId) {
    return
  }
  const workout = workoutService.getOneWorkout(workoutId)
  res.send({ status: 'OK', data: workout })
}

//· POST ONE WORKOUT
//* Extract the body from the request object, validate then pass it to workout service.
const createNewWorkout = (req, res) => {
  const { body } = req
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }

  const createdWorkout = workoutService.createNewWorkout(newWorkout)
  res.status(201).send({ status: 'OK', data: createdWorkout })
}

//· UPDATE ONE WORKOUT
const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req
  if (!workoutId) {
    return
  }
  const updateWorkout = workoutService.updateOneWorkout(workoutId, body)
  res.send({ status: 'OK', data: updateWorkout })
}

//· DELETE ONE WORKOUT
const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req
  if (!workoutId) {
    return
  }
  workoutService.deleteOneWorkout(workoutId)
  res.status(204).send({ status: 'OK' })
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
