# webpack-process-env

```shell
y build && y test
```

`process.env.ENV_VAR_FOO` would be picked up in `dist`, it would be `undefined` or the value set in DefinePlugin in webpack.config.js
