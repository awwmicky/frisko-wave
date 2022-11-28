import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'

export const logger = (isProd)
	? console
	: pino({
		level: 'debug',
		transport: {
			target: 'pino-pretty',
			options: {
				colorize: true,
				translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
				ignore: "pid,hostname",
			},
		},
	})

// export const logger: Console = console
