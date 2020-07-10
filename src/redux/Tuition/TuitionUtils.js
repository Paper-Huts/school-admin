export const addTuitionForGrade = (tuition, tuitionByGrade) => {
  const currentTuition = tuitionByGrade[tuition.grade];

  return currentTuition
    ? updateTuitionForGrade(tuition, tuitionByGrade)
    : {
        ...tuitionByGrade,
        [tuition.grade]: { tuition },
      };
};

export const updateTuitionForGrade = (tuition, tuitionByGrade) => {
  const currentTuition = tuitionByGrade[tuition.grade];

  return {
    ...tuitionByGrade,
    [tuition.grade]: Object.assign({}, currentTuition, tuition),
  };
};
