# Elite Gaming Web

A modern and efficient web application built with Next.js.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Description

**Purpose:** The purpose of this project is to develop a customer rewards check-in system for a business with multiple locations. The system will allow customers to easily check in using their phone number and view their accumulated points for each location. Additionally, the project includes a feature that displays potential rewards for each location.

**Customer Rewards Check-In:** Upon accessing the website, customers will see a dedicated tab for the Customer Rewards check-in page. When they click on this tab, they will be directed to a page where they can enter their phone number. There will also be an option to sign up for the rewards program, leading to the sign-up process as described in the previous sections.

**Points Accumulation by Location:** After customers input their phone number, they will be able to see the number of points they have accumulated for each location. The points will be specific to each location, ensuring that they are not shared across different locations. This feature allows customers to track their progress and rewards for each location individually.

**Location-specific Rewards:** The project will include a separate tab for each location, displaying all the potential rewards that customers may receive. For example, if a customer accumulates 10,000 points, they may be eligible to receive an Apple MacBook. Each location will have its own tab, as different locations may offer different rewards. This feature enhances the customer experience by showcasing the rewards available at each location, providing motivation for continued engagement with the rewards program.

**Screen Timeout and Inactivity:** To manage screen timeout and customer inactivity, a timer will be implemented. After 15 seconds of inactivity on the check-in or sign-up page, a pop-up box will appear, asking customers if they need more time. The pop-up will provide Yes/No options and display a 30-second timer. If the customer selects Yes, the prompt will disappear until another 15 seconds of inactivity. If the customer selects No, the screen will revert back to the check-in page. If no action is taken, the screen will automatically revert back to the login page once the timer ends. This feature ensures efficient use of the tablet and prevents prolonged inactivity.

The project will be developed using Next.js and TypeScript, ensuring a scalable and efficient web application. It's enabling customers to easily check in using their phone number, view accumulated points for each location, and explore location-specific rewards. The customer rewards check-in system will add value to the business by fostering customer loyalty, incentivizing engagement with multiple locations, and providing a seamless and personalized rewards experience.

## Features

- Next.js for Static Site Generator
- Integrate with MUI 5.0
- Type checking TypeScript
- Strict Mode for TypeScript and React 18
- Linter with ESLint
- Code Formatter with Prettier
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Hot module replacement (HMR) for instant updates during development.

## Installation

1. Start by cloning the repository:

   ```bash
   git clone https://github.com/gate4devs/fe_elite_gaming_midwest_web.git

   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   #or
   yarn dev
   ```

## Usage

- Run the development server: `npm run dev #or yarn dev`
- Open your browser and visit: `http://localhost:3000`

## Setup of GitHub Actions

#### First setup the deployment action.

```
mkdir .github && cd .github && mkdir workflows && cd workflows && touch deploy.yml
```

#### Content of `deploy.yml`:

```
name: Deploy Frontend - Elite Gaming

on:
  push:
    branches:
     - dev

jobs:
  deploy:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: 'production'
      API_URL: ${{ secrets.APP_API_URL }}
      HOSTING_URL: ${{ secrets.APP_HOSTING_URL }}

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install Dependencies
        run: CI=false && yarn install

      - name: Generate prod env file
        run: yarn gen:env

      - name: Build
        run: yarn build

      - name: Deploy
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          echo "AWS s3 sync"
          aws s3 sync --region us-east-1 ./out s3://${{ secrets.AWS_S3_BUCKET }} --delete
          echo "AWS CF reset"
          aws cloudfront create-invalidation --region us-east-1 --distribution-id ${{ secrets.AWS_CF_ID }} --paths "/*"

```

#### Setup GitHub Secrets

[Secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) must be setup first in the repo.

## Deployment

To deploy the application to a production environment, follow these steps:

- Build the production-ready code: `npm run build`
- Deploy the app using github action to AWS S3

## Contributing

- Fork the repository on GitHub.
- Clone your forked repository to your local machine.
- Create a new branch for your feature or bug fix.
- Make the necessary changes in your branch.
- Commit your changes with descriptive commit messages.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
- Please make sure to follow our code style guidelines and provide tests for your contributions if applicable.
  🚨 **_Note:_** _Don't use `--no-verify` at all_

## License

The Elite Gaming Web project is licensed under the [MIT License](https://opensource.org/license/mit/).
