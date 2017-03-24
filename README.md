# Luraztia

# Important

Remove <script src="http://localhost:35729/livereload.js"></script> in index

# HOW TO USE GIT
```
- Make a new feature (One branch by feature)
	$ git checkout dev
	$ git pull
	$ git checkout -b myFeature dev
		$ git add .
		$ git commit -m "my comment"
		- repeat as needed
	$ git checkout dev
	$ git pull
	$ git checkout myFeature
	$ git merge dev
		- handle conflicts
  $ git checkout dev
  $ git merge myFeature
  $ git pull
      - handle possible new conflicts
  $ git push -u origin dev


- Delete a local branch
	$ git branch -d myFeature
```

# JS Convention

Use 'use strict'
Use 'ngInject' when you send a parameter :
	- in constructor of your class
 	- in module config

https://github.com/toddmotto/angular-styleguide/tree/es6-version

# HTML Convention

Please use html tags : header, footer, article, nav ...
http://html5doctor.com/

# CSS Convention

Use rem instead of px, in our app 1rem = 16px so 2rem = 32px ...

But never use rem for media queries, use em instead.

```
Block__element--modifier
Ex: Header__logo ou Header__logo--round
```

Define a class for each elements, don't use for example "div > input" or "ul li" in the css file.
Be careful with the name of your class, choose it wisely, be sure there's not already use.

For each class and for more visibility, divide in 3 parts, for example :

```
/* Box model */
margin: 0;

/* Visual */
background-color: #ffffff;

/* Typo */
font-size: 1rem;
```
