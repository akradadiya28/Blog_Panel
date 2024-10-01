
const changePassword = (req, res) => {
    res.render('change-password');
}

const forgotPassword = (req, res) => {
    res.render('forgot-password');
}

module.exports = { changePassword, forgotPassword };