import { seedTransactions } from "@/actions/seed";

export async function GET() {
  try {
    const result = await seedTransactions();
    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
