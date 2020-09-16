class UserInfo {
  constructor({name, job}) {
    this._name = name;
    this.job = job;
  }

  getUserInfo() {
    return {
        userName: this._name.textContent,
        userJob: this._job.tectContent,
    };
  }

  setUserInfo(userName, userJob) {
    this._name.textContent = userName;
    this._job.tectContent = userJob;
  }

}

export default UserInfo;