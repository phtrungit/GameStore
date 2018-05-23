exports.login_form = function (req, res, next){
    res.render('./users/user_login');
};

exports.register_form = function (req, res, next){
    res.render('./users/user_register');
};

exports.user_info = function (req, res, next){
    res.render('./users/user_info');
};