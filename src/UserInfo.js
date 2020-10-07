class UserInfo {
    constructor(name, job) {
        this._name = document.querySelector(".profile__name");
        this._job = document.querySelector(".profile__explorer");
    }

    getUserInfo() {
        return {
            userName: this._name.textContent,
            userJob: this._job.textContent,
        };
    }

    setUserInfo() {
        this._name.textContent = userName;
        this._job.textContent = userJob;
    }
}

export default UserInfo;


