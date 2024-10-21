import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main() {
    const d = await prisma.user.findMany({});
    console.log("Users:", d);

    const user = await prisma.user.findUnique({
        where: {
            id : 1,
        },
        include: {
            posts: true
        }
    });

    console.log("User with ID 1:", user);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });
