import express from 'express';
import {
     googleAuth,
     githubAuth,
     authCallback,
     redirectProfile,
     logoutUser 
    }
 from '../Controllers/authController.js';
 import passport from 'passport';

const router = express.Router();

router.get('/google', googleAuth);
router.get('/google/callback', authCallback('google'), redirectProfile);

// router.get(
//    '/google',
//    passport.authenticate('google', { scope: ['profile', 'email'] }) // Specify the required scopes
//  );
 
//  router.get(
//    '/google/callback',
//    passport.authenticate('google', { failureRedirect: '/' }), // Automatically handles OAuth response
//    (req, res) => {
//      // Redirect to the profile page or another protected route after login
//      res.redirect('/profile');
//    }
//  );


router.get('/github', githubAuth);
router.get('/github/callback', authCallback('github'), redirectProfile);

router.get('/logout', logoutUser);

export default router;
