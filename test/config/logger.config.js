const { format, createLogger, transports } = require("winston");
const { timestamp, combine } = format;
require("winston-daily-rotate-file");

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports: [
    new transports.Console({ level: "debug" }),
    new transports.DailyRotateFile({
      filename: "daily-log-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      level: "debug",
    }),
  ],
});

module.exports = logger;
