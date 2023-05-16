class AppError extends Error {
    constructor(message, statusCode) {
        super(message); 
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor); 
    }
}

module.exports = AppError; 

/*  In this module, we are extending the base Error class. Base Error Class only takes the message argument.
    But we are also providing the statusCode argument to our Error Handling class and are also assigning a few other properties.
    Status gets automatically derived; If statusCode starts with 400 something it is a FAIL else it will be ERROR.
    Also, these errors are operational errors in the sense that; if someone tries to access a resource that doesn't exist it will always be an operational issue.
    And errors like package is missing or some other syntactical error will not have the error called from here. 

    Stack Trace tells where the problem starts by pointing out the module and the line that gave rise to the error. We want to preserve that stack trace.
    However we don't want the Constructor of our Error Class to show up in it and these lines ensure just that. 
*/