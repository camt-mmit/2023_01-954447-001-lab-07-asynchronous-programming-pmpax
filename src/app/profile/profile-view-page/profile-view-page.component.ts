import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataServices } from '../services/profile-data.services';

@Component({
  selector: 'app-profile-view-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent {
  private readonly profileData = inject(ProfileDataServices)

  protected readonly data$ = this.profileData.getdata().then((value) => value ?? 'xxxx');
}
