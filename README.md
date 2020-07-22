# nodejs-serverless-example
AWS Lambda + serverless example in node.js

## Usage (Windows)

1. `git clone` (or clone with Github Desktop)
1. Open a PowerShell (Start -> Windows PowerShell)
1. `cd` to where the repo is cloned (`C:\Users\username\Documents\GitHub\ndoejs-serverless-example`)
1. `npm install`
1. `$env:AWS_ACCESS_KEY_ID="your_aws_access_key_id"`
1. `$env:AWS_SECRET_ACCESS_KEY="your_aws_secret_access_key"`
1. `npm run configure-credentials:windows`
1. `npm run deploy`
1. `npm run invoke`

## Usage (Mac)

1. `git clone` (or clone with Github Desktop)
1. Open a command line prompt (Start -> `cmd`)
1. `cd` to where the repo is cloned (`C:\Users\username\Documents\GitHub\ndoejs-serverless-example`)
1. `npm install`
1. `export AWS_ACCESS_KEY_ID=your_aws_access_key_id`
1. `export AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key`
1. `npm run configure-credentials:mac`
1. `npm run deploy`
1. `npm run invoke`
