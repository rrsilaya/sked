import * as Utils from '../utils';

const { DAYS, QUARTER } = Utils;

class Schedule {
  constructor(timeStart = 7, timeEnd = 19) {
    this.timetable = Array.from({
      length: DAYS * (timeEnd - timeStart) * QUARTER
    }, () => 0);
  }

  // Gets the range of timeslot given the time and day
  getTimeslotRange(time, day) {
    const [ start, end ] = Utils.parseTime(time);
    const Range = {
      start: Utils.getTimeIndex(start, day),
      end: Utils.getTimeIndex(end, day),
    }

    return Range;
  }

  // Fills timetable data
  fill(time, days, value = 1) {
    days = Utils.parseDays(days);

    days.forEach(day => {
      const Range = this.getTimeslotRange(time, day);

      for (let index = Range.start; index < Range.end; index++)
        this.timetable[index] = value;
    });
  }

  // Checks if specified time and days are free
  isFree(time, days) {
    days = Utils.parseDays(days);

    for (let day of days) {
      const Range = this.getTimeslotRange(time, day);
      const timeslot = this.timetable.slice(Range.start, Range.end);

      if (timeslot.some(time => time)) return false;
    }

    return true;
  }
}

export default Schedule;