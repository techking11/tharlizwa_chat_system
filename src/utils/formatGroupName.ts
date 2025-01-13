export const formatGroupName = (groupName: string) => {
  try {
    const changedGroup = groupName
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim();
    return changedGroup;
  } catch (error) {
    console.log(error);
  }
};
