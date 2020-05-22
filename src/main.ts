import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // prisma client code goes in here.
  console.log("IT works");

  await prisma.users.create({
    data: {
      name: "Stooart",
      email: "tribit@gmail.com",
      mobile: "+910000000000",
      picture: "https://github.com/pavittarx/logo.png",
      about: "This is some sample data feed"
    }
  });

  const users = await prisma.users.findMany();
  console.log(users);
}


main()
  // catches errors from the prisma client
  .catch((err) => {
    throw err;
  })
  // Close the connection when script terminates
  .finally(async () => {
    await prisma.disconnect();
  });
