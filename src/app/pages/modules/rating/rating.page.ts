import { Component } from '@angular/core';
import { ApiDefinition } from '../../../components/api/api.component';

const exampleStandardTemplate = `
<div class="ui form">
    <div class="field">
        <label>Rating</label>
        <sui-rating [(ngModel)]="rating" [maximum]="10" [isReadonly]="readonly"></sui-rating>
    </div>
    <div class="field">
        <label>Value</label>
        <input type="number" [(ngModel)]="rating">
    </div>
    <div class="field">
        <sui-checkbox [(ngModel)]="readonly">Read Only?</sui-checkbox>
    </div>
</div>
`;

const exampleStyledTemplate = `
<h5 class="ui top attached header">Stars</h5>
<div class="ui attached segment">
    <sui-rating class="yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<h5 class="ui attached header">Hearts</h5>
<div class="ui bottom attached segment">
    <sui-rating class="red" [type]="'heart'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<h5 class="ui attached header">Female</h5>
<div class="ui bottom attached segment">
    <sui-rating class="purple" [type]="'female'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<h5 class="ui attached header">Male</h5>
<div class="ui bottom attached segment">
    <sui-rating class="blue" [type]="'male'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<h5 class="ui attached header">Cloud</h5>
<div class="ui bottom attached segment">
    <sui-rating class="grey" [type]="'cloud'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<h5 class="ui attached header">Cat</h5>
<div class="ui bottom attached segment">
    <sui-rating class="pink" [type]="'cat'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<h5 class="ui attached header">Circle</h5>
<div class="ui bottom attached segment">
    <sui-rating class="orange" [type]="'circle'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
`;

const exampleColoredTemplate = `
<div class="ui attached segment">
    <sui-rating class="red" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="orange" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="olive" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="green" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="teal" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="blue" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="violet" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="purple" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="pink" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="brown" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="grey" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="black" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
`;

const exampleSizedTemplate = `
<div class="ui attached segment">
    <sui-rating class="mini yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="tiny yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="small yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class=" yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="large yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="huge yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
<div class="ui attached segment">
    <sui-rating class="massive yellow" [type]="'star'" [ngModel]="3" [maximum]="5"></sui-rating>
</div>
`;

@Component({
    selector: 'demo-page-rating',
    templateUrl: './rating.page.html'
})
export class RatingPage {
    public api: ApiDefinition = [
        {
            selector: '<sui-rating>',
            properties: [
                {
                    name: 'maximum',
                    type: 'number',
                    description: 'Sets the highest value the rating allows as input.',
                    defaultValue: '5'
                },
                {
                    name: 'isReadonly',
                    type: 'boolean',
                    description: 'Sets whether or not the rating is read-only. ' +
                                 'This only affects the UI, <code>[ngModel]</code> changes will still display.',
                    defaultValue: 'false'
                },
                {
                    name: 'ngModel',
                    type: 'number',
                    description: 'Bind the rating value to the value of the provided variable.'
                },
                {
                    name: 'type',
                    type: 'string',
                    description: 'Changes the default icon',
                    defaultValue: 'star'
                }
            ],
            events: [
                {
                    name: 'ngModelChange',
                    type: 'number',
                    description: 'Fires whenever the rating value is changed. <code>[(ngModel)]</code> syntax is supported.'
                },
                {
                    name: 'valueChange',
                    type: 'number',
                    description: 'Fires whenever the rating value is changed.'
                }
            ]
        }
    ];
    public exampleStandardTemplate: string = exampleStandardTemplate;
    public exampleStyledTemplate: string = exampleStyledTemplate;
    public exampleColoredTemplate: string = exampleColoredTemplate;
    public exampleSizedTemplate: string = exampleSizedTemplate;
}

@Component({
    selector: 'example-rating-standard',
    template: exampleStandardTemplate
})
export class RatingExampleStandard {
    public rating = 3;
    public readonly: boolean;
}

@Component({
    selector: 'example-rating-styled',
    template: exampleStyledTemplate
})
export class RatingExampleStyled {}

@Component({
    selector: 'example-rating-colored',
    template: exampleColoredTemplate
})
export class RatingExampleColored {}

@Component({
    selector: 'example-rating-sized',
    template: exampleSizedTemplate
})
export class RatingExampleSized {}
export const RatingPageComponents = [RatingPage, RatingExampleStandard, RatingExampleStyled, RatingExampleColored, RatingExampleSized];
