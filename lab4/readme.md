## NPM Project

1. create project folder
2. right click on project folder and select reveal in terminal
3. type `npm init -y` then press enter in terminal
4. open package.json file from the project folder
5. update type as `type:module` in package.json
6. type in terminal `npm i nodemon -D` to install nodemon, which restarts server while changes are made in the file
-D -> indicates intsall in dev dependency
7. it creates node_module folder and package-lock.json
8. update .gitignore file and write project-folder/node_module
9. update package.json to run the project,update the script property as
```
"scripts": {
   "start":"node app.js",
   "dev":"nodemon.js"
  }
  ```
10. now you can start the server by typing `npm run dev` in the project folder
11. 