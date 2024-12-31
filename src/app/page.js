import Image from "next/image";
import prisma from "./lib/prisma";

export default async function Home() {
  const title = "Join the Prisma Slack";
  // // const data = await prisma.users.findMany();
  // const user =
  //   await prisma.$queryRaw`SELECT email, role, "firstName" FROM users WHERE id in (1,2)`;

  // UPDATE films SET kind = 'Dramatic' WHERE kind = 'Drama';
  await prisma.$queryRaw`UPDATE "Post" SET title = 'It is working.' WHERE "authorId" = '2'`;

  // const user1 = await prisma.$queryRaw`SELECT * FROM "POST"`;
  const user =
    await prisma.$queryRaw`SELECT title, "authorId", id, published FROM "Post" WHERE title=${title} OR title LIKE '%wo%'`;

  // await prisma.$queryRaw`SELECT COUNT(*)::int FROM students WHERE firstname LIKE '%e%'
  // AND (age BETWEEN 20 AND 62) AND course_id in(1,9)`;
  //await prisma.$queryRaw`SELECT * from students_copy where firstname ilike '%j%' and lastname = 'D'`;
  // await prisma.$queryRaw`update students_copy set firstname = 'jj', lastname = 'dddd'
  // where id = 201`;
  // await prisma.$queryRaw`select CAST(course_id as TEXT), 'No Course id', lastname from students_copy limit 100`;
  console.log("-------------", user);
  return (
    <div className="flex min-h-screen justify-center items-center font-bold font-grey text-2xl">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
