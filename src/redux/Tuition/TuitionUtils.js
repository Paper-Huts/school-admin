export const addTuitionForGrade = (tuition, tuitionByGradeLevel) => {
  const currentTuition = tuitionByGradeLevel[tuition.grade];

  return currentTuition
    ? updateTuitionForGrade(tuition, tuitionByGradeLevel)
    : {
        ...tuitionByGradeLevel,
        [tuition.grade]: { tuition },
      };
};

export const updateTuitionForGrade = (tuition, tuitionByGradeLevel) => {
  const currentTuition = tuitionByGradeLevel[tuition.grade];

  return {
    ...tuitionByGradeLevel,
    [tuition.grade]: Object.assign({}, currentTuition, tuition),
  };
};
