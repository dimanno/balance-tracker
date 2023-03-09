## Description

Simple web server for get and save balances
of ERC20 tokens and the balance of Ethereum native tokens for current
address - what tokens and how many of them are for the current address
## Installation

```bash
$ npm install
```

## Setup config file

According to .env_simple configure your .env file

### To get an Infura API key, follow these steps:

1. Go to the [Infura website](https://www.infura.io/)  and sign up for an account. If you already have an account, log in to your account.

2. After logging in, click on the Get Started for Free button.

3. Choose the Ethereum network you want to use (Mainnet, Kovan, Ropsten, Rinkeby, or Goerli) and click on the Create New Project button.

4. Enter a project name and select the project type. Then, click on the Create button.

5. Once your project is created, you will be redirected to the project dashboard. Click on the Settings button on the left-hand side of the dashboard.

6. In the Settings page, you will see your project ID and project secret. You can use these values to authenticate your requests to the Infura API.

7. To get the API endpoint for the Mainnet, you can use the following URL: https://mainnet.infura.io/v3/<your-project-id>.

Replace <your-project-id> with your project ID, and you should be able to access the Infura API endpoint for the Ethereum Mainnet.

Note that Infura offers a free plan that allows you to make up to 100,000 requests per day. If you need more requests or more advanced features, you can upgrade to a paid plan.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoint

Example endpoint for get balances for particular address - http://localhost:5050/api/balance/your_address

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)


