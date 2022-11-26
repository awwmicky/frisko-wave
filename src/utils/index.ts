export * from './_confetti'

export const delay = (
	cb = '',
	time = 1000,
	status = true,
) => (
  new Promise<string>((
		resolve,
		reject
	): void => {
		setTimeout(() => {
			(status)
			? resolve(cb)
			: reject(new Error(cb))
		}, time)
	})
)
