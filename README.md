# Competitions API

[![pipeline status](https://gitlab.com/codelattice-dev/trimiles/competitions/badges/master/pipeline.svg)](https://gitlab.com/codelattice-dev/trimiles/competitions/-/commits/master)
[![coverage report](https://gitlab.com/codelattice-dev/trimiles/competitions/badges/master/coverage.svg)](https://gitlab.com/codelattice-dev/trimiles/competitions/-/commits/master)

> If you’re new to TypeScript, checkout [this handy cheatsheet](https://devhints.io/typescript)

## Development

To run in development mode use:

```bash
npm run develop
```

This builds to `/dist` and runs the project in watch mode so any edits you save
inside `src` causes a rebuild to `/dist`. This is set up using `nodemon`.

To do a one-off build, use `npm run build` or `yarn build`.

### Dynamodb Local

For development you need to install `dynamodb-local`.

Setup instructions are available here link
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

Start using `-sharedDb` option for smooth experience.

NoSQL Workbench is a cross-platform GUI that can work with DynomoDB
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.settingup.html
