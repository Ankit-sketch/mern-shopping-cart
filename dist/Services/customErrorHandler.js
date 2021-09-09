"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class customErrorHandler extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg;
    }
    // Signup error
    static Exists(message) {
        return new customErrorHandler(409, message);
    }
    // Login error
    static wrongCredentials(message) {
        return new customErrorHandler(409, message);
    }
}
exports.default = customErrorHandler;
