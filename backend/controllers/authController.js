const User = require('../models/user')
const ErrorHandler = require('../utils/errorHandler')

const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

// Register a user  => /api/v1/register

exports.registerUser = catchAsyncError(async (req, res, next) => {
      
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            publicId: '',
            url: ''
        }
    })
})
 