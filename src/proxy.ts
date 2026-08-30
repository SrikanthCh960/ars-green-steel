import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const numericProductPath = /^\/products\/\d+\/?$/;
const hackedProductQueryKey = /^products\/\d+\/?$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isNumericProductPath = numericProductPath.test(pathname);
  // Next normalizes a bare query such as `?products/123` to the key
  // `products/123` (with an empty value), so inspect decoded query keys.
  const hasHackedProductQuery = [...request.nextUrl.searchParams.keys()].some((key) =>
    hackedProductQueryKey.test(key),
  );
  const isHackedQuery =
    (pathname === "/" || pathname === "/index.php") && hasHackedProductQuery;

  if (isNumericProductPath || isHackedQuery) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}
