"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, select: false }, //select:false it doesnt return email and password if we get call by default
    password: { type: String, required: true, select: false },
});
exports.default = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.js.map