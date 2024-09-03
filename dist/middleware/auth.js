"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresAuth = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const requiresAuth = (req, res, next) => {
    // Log the session object to see if session data is present
    console.log("Session:", req.session);
    // Log cookies to see if they are being received correctly
    console.log("Cookies:", req.cookies);
    // Check if the session has the userId and log appropriately
    if (req.session.userId) {
        console.log("Authenticated user with ID:", req.session.userId);
        next();
    }
    else {
        console.log("Authentication failed: User not authenticated");
        next((0, http_errors_1.default)(401, "User not authenticated"));
    }
};
exports.requiresAuth = requiresAuth;
//# sourceMappingURL=auth.js.map