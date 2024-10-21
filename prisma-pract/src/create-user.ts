import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main(){
    let d = await prisma.user.create({
        data: {
            email: "yuvrajsinghrajput@gmail.com",
            name: "Yuvraj Singh Rajput"
        }
    });
    console.log("user inserted!", d);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });