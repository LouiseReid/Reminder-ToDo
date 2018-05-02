import { ADD_REMINDER } from '../constants'

const reminder = (action) => {
  let { text } = action;
  return {
    text,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
