import src from '../src';
import dist from '../dist';

test('pick up process.env.VAR', () => {
	process.env.ENV_VAR_FOO = 'foo';
	const srcResult = src();
	const distResult = dist();
	expect(srcResult).toBe('foo');
	expect(distResult).toBe('foo');
});