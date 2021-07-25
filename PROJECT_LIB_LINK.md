## angular.json
```
    "angular-editor": {
      "projectType": "library",
      "root": "projects/angular-editor",
      "sourceRoot": "projects/angular-editor/src",
      "prefix": "lib",
      "schematics": {

      .....

```


## tsconfig.json
``
    "paths": {
    .....
      "@gs/angular-editor": ["dist/angular-editor"]
    },


```

## lib build watch
```
ng build angular-editor --watch
ng build angular-spreadsheet
ng build angular-jexcel



npm i file:../jexcel


## angular-split

```
npm i angular-split
ng g application test-angular-split
ng serve  test-angular-split 
ng serve  test-angular-split --host 10.0.2.16


```
## ngx-widget-grid
```
npm i ngx-widget-grid
ng g application test-ngx-widget-grid
ng serve test-ngx-widget-grid
ng serve test-ngx-widget-grid --host 10.0.2.16

ng g application test-ngx-widget-grid2
ng serve test-ngx-widget-grid2 --host 10.0.2.16

ng serve test-ng-resizable-grid --host 10.0.2.16
```
