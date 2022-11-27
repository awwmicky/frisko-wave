// import pino from 'pino'

// export const logger = pino({
//   level: 'debug',
//   transport: {
//     target: 'pino-pretty',
//     options: {
//       colorize: true,
//       translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
//       ignore: "pid,hostname",
//     },
//   },
// })

export const logger: Console = console
