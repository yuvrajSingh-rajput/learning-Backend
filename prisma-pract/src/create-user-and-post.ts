import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ["info", "query"]});

async function main(){
    let d = await prisma.user.create({
        data: {
            email: "yuvrajsingh@gmail.com",
            name: "Yuvraj",
            posts : {
                create : [
                    {
                        title: "Compiler Design"
                    },
                    {
                        title: "Data Structures",
                    }
                ]
            }
        }
    });
    console.log("User with Posts created successfully!", d);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (error) => {
        console.log(error);
        await prisma.$disconnect();
    });