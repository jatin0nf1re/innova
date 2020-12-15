import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {

  mailIcon = faEnvelope;
  linkedInIcon = faLinkedin;

  constructor() { }

  council = [
    {
      'id': 1,
      'name': "Ishan Singh",
      'designation': "Convener",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Ishan_Singh.jpg"
    },
    {
      'id': 2,
      'name': "Meetali Choudhary",
      'designation': "Fest Coordinator",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Meetali_Choudhary.jpg"
    },
    {
      'id': 3,
      'name': "Syed Mohammed Arsalan",
      'designation': "Fest Coordinator",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Syed_Mohammed_Arsalan.jpg"
    },
    {
      'id': 4,
      'name': "Agastya Sethi",
      'designation': "General Secretary",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Agastya_Sethi.jpg"
    },
    {
      'id': 5,
      'name': "Mrinal Thakur",
      'designation': "General Secretary",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Mrinal_Thakur.jpeg"
    },
    {
      'id': 6,
      'name': "Devashish Gupta",
      'designation': "Joint Secretary",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Devashish_Gupta.jpg"
    },
    {
      'id': 7,
      'name': "Vrinda",
      'designation': "Joint Secretary",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Vrinda.jpg"
    },
    {
      'id': 8,
      'name': "Sudipta Kumar Das",
      'designation': "Joint Secretary",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Sudipta_Kumar_Das.jpeg"
    },
    {
      'id': 9,
      'name': "Seemant Aggarwal",
      'designation': "Treasurer",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Seemant_Aggarwal.jpeg"
    },
    {
      'id': 10,
      'name': "Aman Bhatia",
      'designation': "Corporate Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Aman_Bhatia.jpg"
    },
    {
      'id': 11,
      'name': "Nimish Sharma",
      'designation': "Corporate Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Nimish_Sharma.jpeg"
    },
    {
      'id': 12,
      'name': "Nafis Ahmed",
      'designation': "Operations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Nafis_Ahmed.jpg"
    },
    {
      'id': 13,
      'name': "Sachin Kumar Rai",
      'designation': "Operations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Sachin_Kumar_Rai.jpg"
    },
    {
      'id': 14,
      'name': "Arun Singh Patel",
      'designation': "Operations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Arun_Singh_Patel.jpg"
    },
    {
      'id': 15,
      'name': "Praveen Kumar Azad",
      'designation': "Operations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Praveen_Kumar_Azad.jpeg"
    },
    {
      'id': 16,
      'name': "Rajat Saini",
      'designation': "Design Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Rajat_Saini.jpg"
    },
    {
      'id': 17,
      'name': "Yamini Bhalla",
      'designation': "Publicity Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Yamini.png"
    },
    {
      'id': 18,
      'name': "Abhishek Mittal",
      'designation': "Public Relations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Abhishek_Mittal.jpg"
    },
    {
      'id': 19,
      'name': "Aditya Pratap Gupta",
      'designation': "Public Relations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Aditya_Pratap_Gupta.jpg"
    },
  ]

  ngOnInit(): void {
  }

}
