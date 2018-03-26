export default function getEnvVar () {
	const { ENV_VAR_FOO, ENV_VAR_BAR } = process.env;
	return [ENV_VAR_FOO, ENV_VAR_BAR];
};