
function isAdmin (req,res, next) {
    // Assuming user's admin status is stored in req.user.isAdmin
    console.log('Checking if user is admin', req.user?.isAdmin);
    if (req.user?.isAdmin) {
        console.log('Access granted');
        return next();
    } else{
        console.log('Access denied non-admin')
        res.status(403).send('Access denied');
    }
}

module.exports = isAdmin;