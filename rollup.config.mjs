import MODULE from './module.json' with { type: 'json' };
import { terser } from "rollup-terser";

export default {
	input: `.${MODULE.esmodules[0]}`,
	output: {
		file: `./assets/scripts/bundle.min.mjs`,
		format: 'es',
		compact: true
	},
	plugins: [
		terser(),
		json()
	]
};