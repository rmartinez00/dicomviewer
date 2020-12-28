// These should be overridden by the implementation
let user = {
  userLoggedIn: () => true,
  getUserId: () => 1,
  getName: () => 'dicom',
  getAccessToken: () => window.userToken,
  login: () => new Promise((resolve, reject) => reject()),
  logout: () => new Promise((resolve, reject) => reject()),
  getData: key => null,
  setData: (key, value) => null,
};

export default user;
