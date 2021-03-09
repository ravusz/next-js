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
      res.status(200).json({ name: 'John Doe' })
    } catch (e) {
      console.error(e);

      res.status(500);
      res.json({ error: "Sorry unable to save sighting to database" });
    } finally {
      await prisma.disconnect();
    }
  }
}
