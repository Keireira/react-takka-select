import { FocusId } from './Select.d'

const MIN_LENGTH = 0

export const getNextFocusId = (nextFocusId: FocusId, maxLength: number): FocusId => {
	if (nextFocusId > maxLength) return MIN_LENGTH

	if (nextFocusId < MIN_LENGTH) return maxLength

	return nextFocusId
}
