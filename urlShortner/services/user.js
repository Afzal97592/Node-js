const userData = new Map();

const setUser = (uid, user) => {
  //   console.log(uid, user);
  userData.set(uid, user);
};

const getUser = (uid) => {
  return userData.get(uid);
};

export { setUser, getUser };
