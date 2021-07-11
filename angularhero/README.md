# Modified Version from https://angular.io/tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

The main goal was trying to use same folder structures from the tutorial and modified within configuration to make each layers into their own layers such as:
   1. All models belong to model layer.
   
   2. All services belong to services layer.
   
   3. And also make sure that each feature will have its own folder with actual codes, services, templates, etc.

The key is using tsconfig.json to control how webpack will see the folders while coding in typescript.
