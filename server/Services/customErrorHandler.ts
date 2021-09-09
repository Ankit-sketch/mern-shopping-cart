interface customErrorHandler {
    status: number,
    msg: string
}

class customErrorHandler extends Error {
    constructor(status: number, msg: string) {
        super();
        this.status = status;
        this.message = msg;
    }

    // Signup error
    static Exists(message: string) {
        return new customErrorHandler(409, message);
    }

    // Login error
    static wrongCredentials(message: string) {
        return new customErrorHandler(409, message);
    }
}
export default customErrorHandler;