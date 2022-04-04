# API/UI Test Automation Framework (TAF)

### Tech stack:
- [TypeScript](https://www.typescriptlang.org)
- [Playwright Test](https://playwright.dev/docs/test-annotations)

### CI/CD
 - [GitHub Actions](https://docs.github.com/en/actions)
 - [DigitalOcean](https://www.digitalocean.com)
 - [Docker](https://docs.docker.com/engine/)

 ### Test Reports:
 - [Playwright HTML reporter](https://playwright.dev/docs/test-reporters#html-reporter)
 - [NGINX](https://nginx.org/)


## How to run TAF locally
1. Install dependencies:
   - `npm install`
2. Run tests 
   - `npm run test`
   - `npm run test:api`
   - `npm run test:ui`
3. Review report 
   - `./report/index.html`

## How to run TAF from CI/CD
1. Navigate to the GitHub project
2. Click on "Actions"
3. Click on "api/ui auto tests"
4. Click on "Run workflow" and choose the branch
5. Click on the button "Run workflow"
6. Navigate to the tests report from "Make report URL" workflow step
