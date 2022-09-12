# Playwright for testing

## Install dependencies

```bash
pnpm add -D @playwright/test
```

### Headed mode
```bash
pnpx playwright test --headed
```

You can use [Dockerfile](https://github.com/microsoft/playwright/blob/main/utils/docker/Dockerfile.focal) to run on multiple browsers, example:
```bash
docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.25.0-focal /bin/bash
```

## Code generation
```bash
pnpx playwright codegen wikipedia.org
```