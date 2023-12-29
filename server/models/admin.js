
function isAdmin (req,res, next) {
    if (userIsAdmin) {
        return next();
    } else{
        res.status(400).send('Access denied');
    }
}
