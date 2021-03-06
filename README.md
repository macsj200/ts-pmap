# pMap TypeScript Example Repo

This repo provides an example usage of the [pMap](https://www.npmjs.com/package/p-map) npm package in typescript.

# Notes

It seems the latest version of `pMap` (`5.1.0` as of this writing) has been updated to use [ES Modules](https://github.com/sindresorhus/p-map/issues/35).

This can cause issues with projects that aren't configured to use ES Modules.

To use ES Modules in your package you can add the following to your `package.json` file:

```json
{
  "type": "module"
}
```

However, setting `type` in my `package.json` broke my script (running via `ts-node` and compiled via `yarn run tsc`).

Instead, I downgraded `pMap` to `4.0.0` and removed the `type` definition, this seemed to work correctly.

Also note my `tsconfig.json`, it was generated by running `tsc --init`. I added some additional modifications as well but they may not be necessary in your use case.
