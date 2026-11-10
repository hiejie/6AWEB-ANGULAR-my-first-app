import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am an aspiring web developer and UI/UX Designer passionate about creating modern, responsive, and user-friendly web applications. I am continuously learning Angular and other web technologies to improve my development and design skills.';
}



