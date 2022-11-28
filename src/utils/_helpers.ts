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

export const formatDate = (startDate="", endDate="") => {
	if (!startDate || !endDate) return 'Buy Now'

	const formatOption = { month: 'short' as const, day: 'numeric' as const }
	startDate = new Date(startDate).toLocaleString('en-CA', formatOption)
	endDate = new Date(endDate).toLocaleString('en-CA', formatOption)

	return `${ startDate } - ${ endDate }`
}
