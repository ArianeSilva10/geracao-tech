const { User, Profile } = require('../models');

const createUserAndProfile = async () => {
    try {
        const user = await User.create({ email: 'john.doe@example.com', password: '123456' });
        const profile = await Profile.create({
            firstName: 'John',
            lastName: 'Doe',
            picture: 'profile.jpg',
            bio: 'Developer',
            userId: user.id
        });
        console.log('User and Profile created: ', user, profile);
        
    } catch (error) {
        console.error('Error creating User and Profile: ', error);        
    }
};

createUserAndProfile();