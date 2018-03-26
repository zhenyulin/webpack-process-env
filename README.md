# webpack-process-env

```shell
y build && y test
```

`process.env.ENV_VAR_FOO` would not be picked up in `dist`, it would be `undefined` or the value set in DefinePlugin in webpack.config.js

Apart from security considerations, it offers better developer experience by providing consitent behaviour over process.env in src and dist
