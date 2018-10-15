// https://www.styled-components.com/docs/api#typescript
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface ThemeInterface {
	primaryColor: string;
	primaryColorInverted: string;
}

const {
	default: styled,
	css,
	injectGlobal,
	keyframes,
	ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
