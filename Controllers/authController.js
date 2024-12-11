import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
export const githubAuth = passport.authenticate('github', { scope: ['user:email'] });

export const authCallback = (provider) => passport.authenticate(provider, { failureRedirect: '/' });

export const redirectProfile = (req, res) => {
  res.redirect('/profile');
};

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
