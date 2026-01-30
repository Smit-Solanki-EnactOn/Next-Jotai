interface  User {
  id: string;
  name: string;
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  // Simulate DB lookup
  const user = { id: id, name: `User ${id}`}
  return Response.json(user)
}