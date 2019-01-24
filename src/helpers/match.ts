const matched = (x) => ({
	on: () => matched(x),
	otherwise: () => x,
})

const match = (x) => ({
	on: (predicate, fn) => (predicate(x) ? matched(fn(x)) : match(x)),
	otherwise: (fn) => fn(x),
})

export default match
