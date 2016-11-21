export default class UserStore {
  constructor() {
    this._users = {};
  }

  add(user) {
    this._users[user.id] = user;
    console.log(`Adding ${user.id}, total users ${Object.keys(this._users).length}`);
  }

  remove(id) {
    delete this._users[id];
    console.log(`removing ${id}, total users ${Object.keys(this._users).length}`);
  }

  all() {
    return Object.values(this._users);
  }

  setState(id, state) {
    this._users[id].state = state;
  }

  exists(id) {
    return id in this._users;
  }
}
