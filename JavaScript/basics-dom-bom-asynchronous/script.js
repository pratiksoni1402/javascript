const allowedIPs = ['x.x.x.x', 'y.y.y.y']; // Replace with the actual IP addresses you want to allow

const a = app.use((req, res, next) => {
  const clientIP = req.ip // Get the client's IP address
  if (allowedIPs.includes(clientIP)) {
    // Allow access to the requested route
    next();
  } else {
    // Deny access and return an error or a custom page
    res.status(403).send('Access denied.');
  }
});
