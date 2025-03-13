import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Tooltip } from 'bootstrap'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [resourceTimelinePlugin, interactionPlugin, dayGridPlugin, timeGridPlugin],
    initialView: 'resourceTimelineWeek',
    editable: true,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    },
    resources: [
      { id: 'a', title: 'Resource A' },
      { id: 'b', title: 'Resource B' },
      { id: 'c', title: 'Resource C' }
    ],
    events: [
      { id: '1', resourceId: 'a', title: 'Meeting', start: '2024-07-10T10:00:00', end: '2024-07-10T12:00:00', backgroundColor: '#ff9f89', borderColor: '#ff9f89' },
      { id: '2', resourceId: 'b', title: 'Workshop', start: '2024-07-11T14:00:00', end: '2024-07-11T16:00:00', backgroundColor: '#6dbaff', borderColor: '#6dbaff' },
      { id: '3', resourceId: 'c', title: 'Conference', start: '2024-07-12T09:00:00', end: '2024-07-12T11:00:00', backgroundColor: '#c3e88d', borderColor: '#c3e88d' },
      { id: '4', resourceId: 'a', title: 'Seminar', start: '2024-07-13T11:00:00', end: '2024-07-13T13:00:00', backgroundColor: '#f7768e', borderColor: '#f7768e' },
      { id: '5', resourceId: 'b', title: 'Presentation', start: '2024-07-14T15:00:00', end: '2024-07-14T17:00:00', backgroundColor: '#7aa2f7', borderColor: '#7aa2f7' },
    ],
    eventDidMount: (info) => {
      const tooltip = new Tooltip(info.el, {
        title: info.event.title,
        placement: 'top',
        trigger: 'hover',
        container: 'body'
      });
    },
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this)
  };

  constructor() {}

  ngOnInit(): void {}

  handleDateClick(arg:any) {
    alert('Date clicked: ' + arg.dateStr);
  }

  handleEventClick(arg:any) {
    alert('Event clicked: ' + arg.event.title);
  }
}



