# nodejs-serverless-example
AWS Lambda + serverless example in node.js

## Requirements

1. `node.js` + `npm` (download and install from https://nodejs.org/)
1. `git` command line tool or `GitHub Desktop` (download and install from https://desktop.github.com/)
1. text editor (I recommend downloading and installing https://www.sublimetext.com/)
1. AWS free tier account (you will need to create an AWS access key ID + secret access key. Google how to do this. Follow a tutorial. Make sure to copy + paste the credentials somewhere, you will need them later.)

## Setup (Windows)

1. `git clone https://github.com/brandonros/nodejs-serverless-example.git` (or clone with Github Desktop)
1. Open a PowerShell (Start -> `Windows PowerShell`). Type the following commands into the terminal one at a time (you can copy and paste as well as use the Tab key on your keyboard for auto-completion when typing). Press Enter in between each command to run it.
1. `cd` to where the repo is cloned. Example: `cd ~\Documents\GitHub\nodejs-serverless-example`
1. `npm install`
1. `$env:AWS_ACCESS_KEY_ID="your_aws_access_key_id"` (make sure to replace `your_aws_access_key_id` with the credentials you got when setting up your AWS account)
1. `$env:AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"` (make sure to replace `your_aws_secret_access_key` with the credentials you got when setting up your AWS account)
1. `npm run configure-credentials:windows`

## Setup (Mac)

1. `git clone https://github.com/brandonros/nodejs-serverless-example.git` (or clone with Github Desktop)
1. Open a command line prompt (Spotlight Search (Command + Space) -> `Terminal.app`). Type the following commands into the terminal one at a time (you can copy and paste as well as use the Tab key on your keyboard for auto-completion when typing). Press Enter in between each command to run it.
1. `cd` to where the repo is cloned. Example: `cd ~/Documents/nodejs-serverless-example`
1. `npm install`
1. `export AWS_ACCESS_KEY_ID="your_aws_access_key_id"` (make sure to replace `your_aws_access_key_id` with the credentials you got when setting up your AWS account)
1. `export AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"` (make sure to replace `your_aws_secret_access_key` with the credentials you got when setting up your AWS account)
1. `npm run configure-credentials:mac`

## Usage

1. Open `mock-event.json` and read the stock ticker inside of it. It should read `SPY`.
1. Run `npm run deploy && npm run invoke` to deploy + invoke your function to AWS Lambda + AWS API Gateway through the `serverless` command line interface tool. (`&&` is a way to chain multiple commands together)
1. Note the price of `SPY` being returned.

## Exercises left to the reader

1. Open `mock-event.json` and change `SPY` to `APPL`.
1. Run `npm run invoke` in your terminal/command line to call your existing function with `APPL` now (because you updated it in `mock-event.json` and that gets past along to our `invoke` request). The deployed function has not change, but you are able to pass different data on each request by changing `mock-event.json`
1. Change the `getStockPrice` function call in `index.js` to call the `/ajax/getStockOptions` URL from `optionsprofitcalculator.com` instead of the `/ajax/getStockPrice` URL. Hint: you should update the function name to accurately represent what your function is doing, and you will need to update the return value (`responseBody.price.last` will not exist on the `getStockOptions` API call, it is specific to the `getStockPrice` call)

## Concepts learned

1. You will install `node.js` (type of runtime environment to use with the JavaScript progamming language) and `npm` (package manager used with node.js projects). These are executable programs that your computer runs that allow you to program. `Google Chrome`, `Microsoft Word`, and `iMessage` are also "computer programs" (granted, they are not written in node.js. They are written and compiled differently in different programming languages for different target devices/operating systems.)
1. You will install project dependencies using `npm` (dependencies are managed in the `package.json` manifest and imported into the running program with `require()` in `index.js`)
1. You will clone a `git` repository. `git` is a type of source control that allows many people to work on a project at once through branches/commits/pull requests while keeping a codebase always accessible on a server for everybody. You'll clone and work under the `master` branch by default automatically.
1. You will read source files in a text editor and observe syntax highlighting given the type of file (`.js` / `.json` / `.md` in this case) as well as write/save changes.
1. You will read a document in Markdown format (`README.md`). Markdown is a format that allows writers to add structure (headers, lists, bullet points, separation) to test documents.
1. You will read files that represent objects + properties in JSON format (`package.json`, `mock-event.json`, and `serverless.json`). JSON is a data-interchange format that helps computers read data from files and structure it into memory through different data types (arrays, objects, strings, numbers). JSON is how most web pages return data from a server to a client (example: Twitter feed, Google searches, YouTube video search results)
1. You will learn how to open a terminal/command line prompt (also calld a `shell`) and navigate directories (`cd` stands for change directory, `~` represents the home directory for the user you are currently logged in to on your operating system) as well as run commands
1. You will set environment variables and pass them to a command line program/script (`AWS_ACCESS_KEY_ID` + `AWS_SECRET_ACCESS_KEY` get passed to `npm run configure-credentials`)
1. You will learn what an HTTP request is (the way web browsers and applications (clients) interact with backend services/databases).
1. You will learn the different effects passing different variables/parameters through HTTP request bodies (encoded in JSON format in `mock-event.json`) has.
1. You will deploy an `AWS Lambda` function (also known as "serverless"). This code will be ran by a server managed by AWS on every incoming HTTP request/event. It will return a response (status code + response body) to the client (whoever invoked the request to the server).
1. You will invoke the deployed function (aka make an HTTP request/create an event to the server and receive a response from the server). This example shows the flow of a request/response model.
