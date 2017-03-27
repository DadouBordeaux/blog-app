# Luraztia

# Editor

Use 2 spaces for indentation

# Important

Remove `<script src="http://localhost:35729/livereload.js"></script>` in index.html for production

# HOW TO USE GIT
```
- Reset changes in case of error but before a commit
  $ git reset --hard

- Before changing branch make sure you have made on the right branch
  $ git add .
  $ git commit -m "my comment"

- Delete a local branch
	$ git branch -d myFeature

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
    - If you want to merge with dev branch
        $ git checkout dev
        $ git merge myFeature
        $ git pull
            - handle possible new conflicts
        $ git push -u origin dev
    - If you want to make a Pull request
        $ git checkout dev
        $ git pull
            - If there is some new code
              $ git checkout myFeature
              $ git merge dev
                  - handle possible new conflicts
        $ git push --set-upstream origin myFeature
        - click on "make a pull request" on Github
```

# JS Convention

Add a comment at the beginning of each file

Use 'use strict'  

Angular files name:
  - Module
    - name.md.js
  - Component
    - name.cp.js
  - Service
    - name.sv.js

Use 'ngInject' when you send a parameter :  
  - in constructor of your class
  - in module config
  - ...

https://github.com/toddmotto/angular-styleguide/tree/es6-version

Prefix angular attribute with data- to be html5 compliant :
  - data-ng-bind=""
  - data-ng-model=""

Translate the interface
  - use this in html
    - data-ng-bind="'NAME' | translate"

# HTML Convention

Use html tags : header, footer, article, nav ...  
http://html5doctor.com/

# CSS Convention

Use rem instead of px, in our app 1rem = 16px so 2rem = 32px ...  
But never use rem for media queries, use em instead.

```
Block__element--modifier
Ex: Header__logo ou Header__logo--round
```

Define a class for each elements, don't use for example "div > input" or "ul li" in the css file. Be careful with the name of your class, choose it wisely, be sure there's not already use.

For each class and for more visibility, divide in 3 parts, for example :

```
/* Box model */
margin: 0;

/* Visual */
background-color: #ffffff;

/* Typo */
font-size: 1rem;
```
