import { useEffect } from 'react'

export const useOnMount = (onMount?: Function) => useEffect(() => {
	if (typeof onUnmount === 'function') {
		onMount()
	}
}, [])

export const useOnUnmount = (onUnmount?: Function) => useEffect(() => ()=> {
	if (typeof onUnmount === 'function') {
		onUnmount()
	}
}, [])
