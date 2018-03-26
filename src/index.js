export default function getEnvVar () {
	const { ENV_VAR_FOO } = process.env;
	return ENV_VAR_FOO;
};