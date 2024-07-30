import { NextRequest } from "next/server";

export function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  
}
