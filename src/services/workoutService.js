const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

/*  
    Keep the good practice naming service methods the same as the controller methods 
    so that you have a connection between those.
*/
const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts()
  return allWorkouts
}

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId)
  return workout
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }
  const createdWorkout = Workout.createNewWorkout(workoutToInsert)
  return createdWorkout
}

const updateOneWorkout = () => {}

const deleteOneWorkout = () => {}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
