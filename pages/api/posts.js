import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });

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
      await prisma.disconnect();
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
      await prisma.disconnect();
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { body } = req;
      console.log('body', body)

      res.status(200);
      res.json('dddd');
    } catch (e) {
      console.error(e);

      res.status(500);
      res.json({ error: "Unable to delete post" });
    } finally {
      await prisma.disconnect();
    }
  }
}
