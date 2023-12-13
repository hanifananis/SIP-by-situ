// middleware/authMiddleware.js
export const checkRoles = (roles) => {
    return (req, res, next) => {
        const userRoles = req.user.roles;

        if (roles.every(role => userRoles.includes(role))) {
            return next();
        } else {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }
    };
};
