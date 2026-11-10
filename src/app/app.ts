import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Julia Andrea D. Pepito';
  location = 'San Fernando Pampanga';
  email = 'pepitojuliassap@gmail.com';
  phone = '0999 4525 480';

  profile = 'I am a student who is passionate about web development and an aspiring UI/UX Designer. I enjoy learning new technologies, exploring creative ideas, and building useful and user-friendly applications. My goal is to improve my skills in HTML, CSS, JavaScript, and Angular while gaining a better understanding of front-end development. I also want to develop my creativity and design skills to create websites that are both visually appealing and easy to use. In the future, I hope to become a skilled web developer and UI/UX Designer who can build meaningful digital experiences and solve real-world problems through technology.';

 skills = [
  'HTML and CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Figma',
  'Responsive Web Design',
  'UI/UX Design',
  'Wireframing and Prototyping',
  'Problem-Solving',
  'Creative Thinking'
];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
