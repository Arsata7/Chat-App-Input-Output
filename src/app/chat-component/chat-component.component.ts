import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css'],
})
export class ChatComponentComponent implements OnInit {
  @Input() userId: number | undefined;
  @Input() messages: any;
  @Output() messagesHandler: EventEmitter<any>;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.messagesHandler = new EventEmitter();
    this.form = fb.group({
      message: [''],
      picture: [''],
    });
  }
  ngOnInit(): void {}
  sendMessage() {
    const picture =
      this.userId === 1
        ? `assets/images/man-portrait.jpg`
        : `assets/images/woman-portrait.jpg`;
    this.form.controls['picture'].setValue(picture);
    const message = {
      userId: this.userId,
      message: this.form.get('message')?.value,
      picture: this.form.get('picture')?.value,
    };
    this.messagesHandler.emit(message);
    this.form.reset();
  }
}
