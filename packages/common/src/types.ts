const { z } = require("zod");

module.exports = {
    CreateUserSchema: z.object({
        username: z.string().min(3).max(20),
        password: z.string(),
        name: z.string()
    }),

    SigninSchema: z.object({
        username: z.string().min(3).max(20),
        password: z.string(),
    }),

    CreateRoomSchema: z.object({
        name: z.string().min(3).max(20),
    })
};