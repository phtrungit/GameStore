
exports.login_form = function (req, res, next){
    res.render('./users/user_login');
};

exports.register_form = function (req, res, next){
    res.render('./users/user_register');
};