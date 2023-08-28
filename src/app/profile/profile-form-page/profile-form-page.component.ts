import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataServices } from '../services/profile-data.services';
import { Profile } from '../models';

@Component({
  selector: 'app-profile-form-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-form-page.component.html',
  styleUrls: ['./profile-form-page.component.scss']
})
export class ProfileFormPageComponent {
  private readonly profileData = inject(ProfileDataServices);

  protected readonly data$ = this.profileData
    .getdata()
    .then((value) => value ?? ('undefined' as const));

    protected async save(data: Profile): Promise<void>{
      await
    }
}
