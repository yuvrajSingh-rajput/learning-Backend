import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']});

async function main() {
    let d = await prisma.post.create({
        data: {
            title: "title of the post",
            content: "afhuwajsba",
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
            // authorId = 1;
        }
    });
    console.log("post has been created!", d);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });