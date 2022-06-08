Run Node.js Server with express - Boilerplate

Description: How to start Node.js Service with (Atom IDE, Node.js, NPM start, nodeMon, package.json


1) Initiation
    - mkdir application
    - cd app
    - touch index.html
    - touch .gitignore
    - touch server.js
    - touch ReadMe.md
    - npm init -y                               < to create pakcage.json
    - vi package.json.                          < add ‘startDev’
            "scripts": {
            "startDev": "nodemon promises.js”.  < assuming that nodemon is available for all accounts
            },

2)  Create 'Public' Directory for static files
    - atom .   or code .                        < to open in IDE
    - mkdir public                              < put css,image, js scripts

 2. Install Express

	- npm install express 		-	https://expressjs.com/
  - npm install body-parser                     < if processing Post request from HTML forms.

3. Copy/Paste Boiler template for
    index.hmtl
    server.js
    .gitignore

4.  Start/Run Server
  - npm run startDev


4.  Setup Git.
    - vi .gitignore                             < add filenames to ignore
    - git init
    - git add .
    - git commit - m "starting files"
