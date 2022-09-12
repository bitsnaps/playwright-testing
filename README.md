# Playwright for testing

Example from Grafikart's video on [Youtube](https://www.youtube.com/watch?v=UgF2LwlNnC8).

## Install dependencies

```bash
pnpm add -D @playwright/test
```

### Headed mode
```bash
pnpx playwright test --headed
```

## Report to HTML page
```bash
pnpx playwright show-report
```

You can use [Dockerfile](https://github.com/microsoft/playwright/blob/main/utils/docker/Dockerfile.focal) to run on multiple browsers, example:
```bash
docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.25.0-focal /bin/bash
```

## Code generation
```bash
pnpx playwright codegen wikipedia.org
```

## Tracing
You can trace execution by adding `trace: 'on-first-retry'` to the configuration file `playwright.config.ts`, you can also upload the generated zip file (in case of test failure) in `./test-results/[NAME_OF_YOUR_TEST]/trace.zip` directory to the web page: [trace.playwright.dev](https://trace.playwright.dev/), you can also pass a URL of the `trace.zip` file to that web page.