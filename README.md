# Angular 4 - Steps to add Bootstrap 3 
```
npm install jquery bootstrap ngx-bootstrap --save
```

Add this style to  "styles": ["styles.css"] in .angular-cli.json
```
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],
```

Add these scripts to "scripts": [] in .angular-cli.json
```
"scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```

You'll need to restart the server since it does not watch for changes in .angular-cli.json

```
ng s
```

Import whatever ngx modules you want to use and add to the imports
```
import { ModalModule, CarouselModule } from 'ngx-bootstrap';
...

@NgModule({

    imports: [
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
    ],
 
})
```

## [Bootstrap 3](getbootstrap.com)

## [ngx-bootstrap](http://valor-software.com/ngx-bootstrap/#/)