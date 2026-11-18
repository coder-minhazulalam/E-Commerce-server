import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundHandler: RequestHandler = (_request, response) => {
  response.status(404).json({
    error: {
      code: "not_found",
      message: "Route not found.",
    },
  });
};

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (response.headersSent) return;

  const message =
    process.env.NODE_ENV === "production"
      ? "An unexpected server error occurred."
      : error instanceof Error
        ? error.message
        : "An unexpected server error occurred.";

  response.status(500).json({
    error: {
      code: "internal_server_error",
      message,
    },
  });
};
