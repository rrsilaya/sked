const DAYS_OF_THE_WEEK = ['M', 'T', 'W', 'Th', 'F', 'S'];

export const QUARTER = 4;
export const DAYS = 6;
export const TIME_PAD = 7;

export const getTimeIndex = (time, day) => {
  const [ HRS, MINS ] = [ 0, 1 ];
  const QUARTER_MINS = 15;
  const HOURS = 12;

  const dayIndex = DAYS_OF_THE_WEEK.indexOf(day) * QUARTER * HOURS;

  return dayIndex + ((time[HRS] - TIME_PAD) * QUARTER) + (time[MINS] / QUARTER_MINS);
}

export const parseTime = time =>
  time.split('-').map(timeslot => timeslot.split(':').map(parseFloat));

export const parseDays = days => days.split(/(?=[A-Z])/);