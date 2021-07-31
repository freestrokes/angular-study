const authRouter = require('express').Router();
const auth = require('../controller/auth.controller.ts');
const signUpGuard = require('../guard/sign-up.guard.ts');

// sign-up
authRouter.post(
    '/api/auth/signup',
    [
        signUpGuard.checkDuplicateUsernameOrEmail,
        signUpGuard.checkRolesExisted
    ],
    auth.signup
);

// sign-in
authRouter.post('/api/auth/signin', auth.signin);

module.exports = authRouter;
