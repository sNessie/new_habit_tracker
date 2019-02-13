import React from 'react';
import ListTimesOfHabit from './ListTimesOfHabit';


const ListHabits = ({habits, makeReady}) => {
    const habitsList = habits.map(habit => {
        return (
            <div key={habit.id}>
            <h1>
                {habit.name}
            </h1>
            <div>
                Date of starting: {habit.date}
            </div>
            <div>
                Times to repeat: {habit.times}
            </div>
            <div>
                Ready:
                {/* <ListTimesOfHabit times={habit.timesRepeat}  makeReady = {makeReady}/> */}
            </div>
            </div>

        );
    })
    return (
        <div>
            {habitsList}
        </div>
    )

};

export default ListHabits;