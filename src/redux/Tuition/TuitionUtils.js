export const addTuitionForGrade = (tuition, tuitionListByGradeLevel) => {
  const currentTuition = tuitionListByGradeLevel[tuition.grade];

  return currentTuition
    ? updateTuitionForGrade(tuition, tuitionListByGradeLevel)
    : {
        ...tuitionListByGradeLevel,
        [tuition.grade]: { tuition },
      };
};

export const updateTuitionForGrade = (tuition, tuitionListByGradeLevel) => {
  const currentTuition = tuitionListByGradeLevel[tuition.grade];

  return {
    ...tuitionListByGradeLevel,
    [tuition.grade]: Object.assign({}, currentTuition, tuition),
  };
};
