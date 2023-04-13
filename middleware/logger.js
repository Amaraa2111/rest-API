const logger = (req, res , next) =>{
    req.userId = "lsanchsbvkuabsknc21";
    console.log( `${req.method} ${req.protocol}://${req.host} ${req.originalUrl}`);
    next();
};

module.exports = logger;