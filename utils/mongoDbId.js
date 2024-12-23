export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updateObj } = { ...obj, id: obj._id.toString() };
  return updateObj;
};
export const convertToPlainObject = (data) => {
  return data.map((item) => {
    const { _id, userId, ...rest } = item;
    return {
      ...rest,
      id: _id.toString(),
      userId: userId.toString(),
      release_date: JSON.stringify(item.release_date),
    };
  });
};
