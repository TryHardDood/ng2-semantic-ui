import { Component } from '@angular/core';

@Component({
    selector: 'demo-page-getting-started',
    templateUrl: './getting-started.page.html',
    styles: [`
.dividing.header {
    margin-top: 1em;
    margin-bottom: 0.5em;
}
`]
})
export class GettingStartedPage {
    public installCode = `$ npm install ngx-fomantic-ui --save`;

    public includeCssCode =
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.7.4/dist/semantic.min.css">`;

    public importCode = `import {SuiModule} from 'ngx-fomantic-ui';`;
    public moduleImportCode = `
import {SuiModule} from 'ngx-fomantic-ui';

@NgModule({
    declarations: [AppComponent, ...],
    imports: [SuiModule, ...],
    bootstrap: [AppComponent]
})
export class AppModule {}
`;
    public systemJSCode = `
var config = {
    ...
    map: {
        ...
        'ngx-fomantic-ui': 'npm:ngx-fomantic-ui/bundles/ngx-fomantic-ui.umd.min.js'
    }
}
`;
    public individualImportCode = `import {SuiCheckboxModule, SuiRatingModule} from 'ngx-fomantic-ui';`;
}
