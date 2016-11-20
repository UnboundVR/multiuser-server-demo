export default class UserStore {
  constructor() {
    this._users = {};
  }

  add(user) {
    this._users[user.id] = user;
  }

  remove(id) {
    delete this._users[id];
  }

  all() {
    return Object.values(this._users);
  }
}
