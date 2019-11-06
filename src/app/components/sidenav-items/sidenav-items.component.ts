import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  icon: string;
  trigger: string;
  type: string;
}

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.scss']
})
export class SidenavItemsComponent {
  // @ViewChild(MatMenuTrigger, {static: true}) trigger: MatMenuTrigger;
  @Output() contentType = new EventEmitter();

  public notes: Section[] = [
    {
      name: 'Заполнить документы на зачисление',
      updated: new Date('2/20/16'),
      icon: 'account_balance',
      trigger: 'menu',
      type: 'include',
    },
    {
      name: 'Заполнить документы на отчисление',
      updated: new Date('2/20/16'),
      icon: 'indeterminate_check_box',
      trigger: 'exclude',
      type: 'exclude',
    },
    {
      name: 'Подготовить отчет',
      updated: new Date('2/20/16'),
      icon: 'assessment',
      trigger: 'menu',
      type: 'report',
    },
    {
      name: 'Посмотреть реестр',
      updated: new Date('2/20/16'),
      icon: 'assignment',
      trigger: 'menu',
      type: 'reestr',
    },
    {
      name: 'Реквизиты ДКШ',
      updated: new Date('1/18/16'),
      icon: 'attach_money',
      trigger: 'menu',
      type: 'requisities',
    },
    {
      name: 'Информация по обучающимся',
      updated: new Date('2/20/16'),
      icon: 'perm_device_information',
      trigger: 'menu',
      type: 'info',
    },
  ];

  // [matMenuTriggerFor]="exclude"
  // public openMenuByNote() {
  //   this.trigger.openMenu();
  // }
  // public openInfoPage(type) {
  //   if (type === 'include') {
  //     console.log('in');
  //   }
  // }

  public onOpenDetails(note) {
    this.contentType.emit(note.type);
    // console.log(this.contentType);
  }
}
