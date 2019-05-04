import { Component } from '@angular/core';
import { MessageController, SuiMessageService, MessagePosition, MessageConfig, MessageState } from 'ngx-fomantic-ui';

@Component({
    selector: 'demo-page-test',
    templateUrl: './test.page.html'
})
export class TestPage {
    public controller: MessageController;

    constructor(private messageService: SuiMessageService) {
        this.controller = new MessageController();
        this.messageService.position = MessagePosition.BottomRight;
        this.messageService.isNewestOnTop = true;
    }

    public open(): void {
        const message = new MessageConfig(Date.now().toString(), MessageState.Default, 'Header');
        message.hasProgress = true;
        // this.controller.show(message);
        // this._messageService.show(message);
    }

    public dismissAll(): void {
        this.controller.dismissAll();
        this.messageService.dismissAll();
    }
}
