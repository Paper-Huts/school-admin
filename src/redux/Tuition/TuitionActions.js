import { TuitionActionTypes } from './TuitionTypes'

export const addTuition = tuition => ({
  type: TuitionActionTypes.ADD_TUITION,
  payload: tuition
});