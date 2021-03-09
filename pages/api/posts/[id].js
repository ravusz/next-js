import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

export default async function (req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query

      await prisma.post.delete({
        where: {
          id
        },
      })

      res.status(200);
      res.json();
    } catch (e) {
      console.error(e);

      res.status(500);
      res.json({ error: "Unable to delete post" });
    } finally {
      await prisma.$disconnect()
    }
  }
}
