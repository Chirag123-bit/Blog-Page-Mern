const generateToken = require("../config/token");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt")

module.exports.register = async (req, res, next) => {
    try {
        const { fname, lname, username, email, password } = req.body;
        const usernameCheck = await User.findOne({ username });
        const emailCheck = await User.findOne({ email });


        if (usernameCheck) {
            return res.status(400).json({
                status: false,
                message: "Verification Failed! Username already exists",
            });
        }
        if (emailCheck) {
            return res.status(400).json({
                status: false,
                message: "Verification Failed! Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            fname,
            lname,
            username,
            email,
            password: hashedPassword,
        });

        user
            .save()
            .then((data) => {
                return res.status(200).json({
                    status: true,
                    data: data,
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    status: false,
                    error: error.message,
                });
            });
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: error.message,
        });
    }
};


module.exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    var user = await User.findOne({ username })
    if (!user) {
        return res.status(400).json({
            "msg": "Invalid Username or Password",
            "status": false
        })
    }
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return res.status(400).json({
            "msg": "Invalid Username or Password",
            "status": false
        })
    }
    const token = generateToken(user._id);
    res.cookie("token", token, {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true
    })

    return res.status(200).json({
        "success": true,
        user
    })
}


module.exports.logout = async (req, res, next) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        return res.status(200).json({
            "status": true,
            "message": "You have been logged out"
        })

    } catch (error) {
        return res.status(500).json({
            "status": false,
            "message": "Some Error Occured"
        })
    }
}


module.exports.mydetails = async (req, res, next) => {
    try {
        return res.status(200).json({
            "status": true,
            "data": req.user
        })
    } catch (error) {
        return res.status(500).json({
            "status": false,
            "message": "Some Error Occured"
        })
    }
}



module.exports.updateProfile = async (req, res, next) => {
    try {
        const { fname, lname } = req.body;
        const user = await User.findByIdAndUpdate(req.user._id, { fname, lname }, {
            new: true
        })
        return res.status(200).json({
            "status": true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            "status": false,
            "message": "Some Error Occured"
        })
    }
}


