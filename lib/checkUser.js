import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (!loggedInUser) {
      const name = `${user.firstName} ${user.lastName}`;
      return await db.user.create({
        data: {
          clerkUserId: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: name,
          imageUrl: user.imageUrl,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export default checkUser;
