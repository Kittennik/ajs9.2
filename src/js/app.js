export default class Validator {
  validateUsername(username) {
    this.username = username;
    return /^[\w-]+$/.test(this.username) && !/[\d]{4,}/.test(this.username) && /^[^\d_-]/.test(this.username) && /[^\d_-]$/.test(this.username);
  }
}
