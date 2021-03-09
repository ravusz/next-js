import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

export default async function (req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany();
      res.status(200);
      res.json({ posts });
    } catch (e) {
      console.error(e);

      res.status(500);
      res.json({ error: "Unable to fetch posts" });
    } finally {
      await prisma.$disconnect()
    }
  }

  if (req.method === 'POST') {
    try {
      const { body } = req;
      const posts = await prisma.post.create({ data: body });

      res.status(200);
      res.json({ posts });
    } catch (e) {
      console.error(e);

      res.status(500);
      res.json({ error: "Unable to add post" });
    } finally {
      await prisma.$disconnect()
    }
  }
}
