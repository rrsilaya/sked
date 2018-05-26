import Schedule from './features/Schedule';

/**
 * @TODO
 * 1. Remove all timeslots not in the time period.
 */

const sked = new Schedule();
sked.fill('7:00-10:00', 'MT');
console.log(sked.timetable.join(''));
