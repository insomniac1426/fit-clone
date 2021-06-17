export default class Workouts {

    constructor () {
        this.currentWorkout = 0
        this.workoutList = []
    }

    add(workout) {
        this.workoutList.push(workout)
    }
    
}