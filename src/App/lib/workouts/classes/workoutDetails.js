import Depth from "./workoutDetailsComponents/depth"
import Pace from "./workoutDetailsComponents/pace"
import Reps from "./workoutDetailsComponents/reps"
import Timer from "./workoutDetailsComponents/timer"

export default class WorkoutDetails {

    constructor(rep_limit, timer_limit) {
        this.reps = new Reps(0 , rep_limit)
        this.pace = new Pace(0)
        this.depth = new Depth(0)
        this.timer = new Timer(0, timer_limit)
    }
}