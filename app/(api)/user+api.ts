import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  const sql = neon(String(process.env.DATABASE_URL));

  try {
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return Response.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const response = await sql`
            INSERT INTO users(name,email,clerk_id)
            VALUES(${name},${email},${clerkId})
                 `;

    return Response.json(JSON.stringify({ data: response }), { status: 201 });
  } catch (error: any) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
