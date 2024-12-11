export const getProfile = (req, res) => {
    res.send(`<h1>Welcome, ${req.user.displayName}</h1><p>Email: ${req.user.email || 'Not available'}</p><a href="/auth/logout">Logout</a>`);
  };
  