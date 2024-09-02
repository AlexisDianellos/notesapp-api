"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const envalid_2 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    MONGODB_CONNNECTION: (0, envalid_2.str)(),
    PORT: (0, envalid_2.port)(),
    SESSION_SECRET: (0, envalid_2.str)(),
});
//# sourceMappingURL=validateEnv.js.map