const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserProfile = async (userId) => {
    const user = await prisma.user.findUnique({
        where: {
            user_id: userId,
        },
    });
    return user;
};

module.exports = {
    getUserProfile,
};
