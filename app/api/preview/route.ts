import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "../../../prismicio";

export async function GET(request: NextRequest): Promise<Response> {
  const client = createClient();

  draftMode().enable();

  // Assuming redirectToPreviewURL returns a Response or a Promise<Response>
  return await redirectToPreviewURL({ client, request });
}
