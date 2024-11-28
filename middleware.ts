import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/api/webhooks/clerk", "/api/webhooks/stripe"],
} as ClerkMiddlewareOptions);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
