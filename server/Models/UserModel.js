const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
};

const User = mongoose.model('User', userSchema)

module.exports = User;