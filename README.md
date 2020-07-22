# nodejs-serverless-example
AWS Lambda + serverless example in node.js

## Requirements

1. `node.js` + `npm` (download and install from https://nodejs.org/)
1. `git` command line tool or `GitHub Desktop` (download and install from https://desktop.github.com/)
1. text editor (I recommend https://www.sublimetext.com/)

## Usage (Windows)

1. `git clone` (or clone with Github Desktop)
1. Open a PowerShell (Start -> Windows PowerShell)
1. `cd` to where the repo is cloned (`~\Documents\GitHub\ndoejs-serverless-example`)
1. `npm install`
1. `$env:AWS_ACCESS_KEY_ID="your_aws_access_key_id"`
1. `$env:AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"`
1. `npm run configure-credentials:windows`
1. `npm run deploy`
1. `npm run invoke`

## Usage (Mac)

1. `git clone` (or clone with Github Desktop)
1. Open a command line prompt (Start -> `cmd`)
1. `cd` to where the repo is cloned (`~/Documents/GitHub/ndoejs-serverless-example`)
1. `npm install`
1. `export AWS_ACCESS_KEY_ID=your_aws_access_key_id`
1. `export AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key`
1. `npm run configure-credentials:mac`
1. `npm run deploy`
1. `npm run invoke`

## Concepts learned

1. You will install `node.js` (type of runtime environment to use with the JavaScript progamming language) and `npm` (package manager used with node.js projects)
1. You will clone a git (type of source control) repository (you'll clone and work under the `master` branch)
1. You will open source files in a text editor and observe syntax highlighting given the type of file (`.js` / `.json` / `.md` in this case)
1. You will read a Markdown document (`README.md`)
1. You will read a file that is in JSON format (`package.json`)
1. You will set environment variables and pass them to a command line program/script (`AWS_ACCESS_KEY_ID` + `AWS_SECRET_ACCESS_KEY`)
1. You will learn what an HTTP request is (the way web browsers and applications (clients) interact with backend services/databases).
1. You will deploy an `AWS Lambda` function (also known as "serverless"). This code will be ran on every incoming HTTP request/event.
1. You will invoke the deployed function (aka make an HTTP request/create an event). This example shows the flow of a request/response model.
