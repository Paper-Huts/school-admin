export const addTuitionForGrade = (tuition, tuitionByGradeLevel) => {
  const currentTuition = tuitionByGradeLevel[tuition.id];

  return currentTuition
    ? updateTuitionForGrade(tuition, tuitionByGradeLevel)
    : {
        ...tuitionByGradeLevel,
        [tuition.id]: tuition,
      };
};

export const updateTuitionForGrade = (tuition, tuitionByGradeLevel) => {
  const currentTuition = tuitionByGradeLevel[tuition.id];

  return {
    ...tuitionByGradeLevel,
    [tuition.id]: Object.assign({}, currentTuition, tuition),
  };
};
