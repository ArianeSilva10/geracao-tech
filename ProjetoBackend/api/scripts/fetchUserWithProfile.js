const { User, Profile } = require("../models")

const fetchUserWithProfile = async (userId) => {
    try {
        const user = await User.findByPk(userId, {
            include: Profile
        });
        return user;
    } catch (error) {
        console.error(error);        
    }
};