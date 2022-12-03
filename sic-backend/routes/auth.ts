import { NextFunction, Request, Response } from "express";
const Router = require('express-promise-router')
const passport = require('passport');

const router = new Router()

require('../utilities/passport.auth');

passport.use(passport.initialize())
passport.use(passport.session())

// Login
router.get('/login', passport.authenticate('local', {
  failureRedirect: '/login'
}), (req: Request, res: Response) => {
  console.log('is it true', req.isAuthenticated());
  res.redirect('/');
});

// Logout
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logout();
});

module.exports = router