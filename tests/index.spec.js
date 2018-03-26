import src from '../src';
import dist from '../dist';

test('pick up process.env.VAR', () => {
	process.env.ENV_VAR_FOO = 'foo';
	const srcResult = src();
	const distResult = dist();
	expect(srcResult).toEqual(['foo', undefined]);
	expect(distResult).toEqual(['foo', 'bar']);
});