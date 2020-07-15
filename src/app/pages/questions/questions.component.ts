import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: any[] = [
    {
      id: 1,
      label: 'Who won 2019 Cricket world cup?',
      options: [
        {
          id: 1,
          label: 'India',
        },
        {
          id: 2,
          label: 'Austalia',
        },
        {
          id: 3,
          label: 'England',
        },
        {
          id: 4,
          label: 'Sri Lanka',
        },
      ],
      selectedOption: null,
    },
    {
      id: 1,
      label: 'Who won 2019 Cricket world cup?',
      options: [
        {
          id: 1,
          label: 'India',
        },
        {
          id: 2,
          label: 'Austalia',
        },
        {
          id: 3,
          label: 'England',
        },
        {
          id: 4,
          label: 'Sri Lanka',
        },
      ],
      selectedOption: null,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.questions);
  }
}
