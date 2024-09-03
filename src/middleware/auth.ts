import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const requiresAuth: RequestHandler = (req, res, next) => {
  // Log the session object to see if session data is present
  console.log("Session:", req.session);

  // Log cookies to see if they are being received correctly
  console.log("Cookies:", req.cookies);

  // Check if the session has the userId and log appropriately
  if (req.session.userId) {
    console.log("Authenticated user with ID:", req.session.userId);
    next();
  } else {
    console.log("Authentication failed: User not authenticated");
    next(createHttpError(401, "User not authenticated"));
  }
};
