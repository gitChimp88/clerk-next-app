import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (isProtectedRoute(req) && !userId) {
    // Redirect to sign-in if user isn't authenticated
    return Response.redirect("/sign-in");
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"], // apply to all app routes
};
