const express = require('express')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const app = express()
const PORT = process.env.PORT || 3000
const dev = 'Oscar 👦🏽'

//* This is connected to the ./routes folder!
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () =>
  console.log(`Hey ${dev} , API is listening on port ${PORT}!`)
)
