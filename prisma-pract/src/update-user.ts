import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main() {

    const user = await prisma.user.update({
        where: {
            id : 1,
        },
        data:{
            name: "Yuvraj Singh 2"
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
