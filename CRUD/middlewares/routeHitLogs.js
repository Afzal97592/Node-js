import fs from "fs";

export default function handlerouteHitLogs(req, res, next) {
  const hitedRoute = req?.originalUrl;
  fs.appendFile(
    "./logs.txt",
    `\nUser hit on this ${hitedRoute} route at ${Date()} with this method ${
      req.method
    } && sytem ip is ${req?.ip}`,
    (error, log) => {
      try {
      } catch (error) {
        console.error(error);
      }
    }
  );
  next();
}
