# README

Ahh, memories. I remember the first time I deployed a React app on GitHub. It took me almost an hour. This took about 3 minutes. Check out how I did it:

## Step 1

Create the app with `create-react-app`. Replace 'boiler-plate' with the name of your app.

~~~bash
npx create-react-app boiler-plate
~~~

## Step 2

Change directories into your new app and open your favorite code editor.

~~~bash
cd boiler-plate
code .
~~~

## Step 3

Install the `gh-pages` npm module locally.

~~~bash
npm i gh-pages
~~~

## Step 4

copy these lines into package.json.

~~~javascript
// into the top level object
"homepage": "https://www.tylermaxwell.co/boiler-plate",

// into the scripts object
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
~~~

## Step 5 

Set up the GitHub repo.

~~~bash
git add .
git commit -m "init commit"
git remote add origin git@github.com:tmax818/boiler-plate.git
git push -u origin master
~~~

## Step 6

Deploy that shit.

~~~
npm run deploy
~~~