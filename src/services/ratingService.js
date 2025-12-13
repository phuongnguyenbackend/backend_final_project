const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getRatingsByProductId = async (productId) => {
    const ratings = await prisma.rating.findMany({
        where: {
            product_id: parseInt(productId),
        },
        orderBy: {
            created_at: 'desc',
        },
    });
    return ratings;
};

module.exports = {
    getRatingsByProductId,
};
