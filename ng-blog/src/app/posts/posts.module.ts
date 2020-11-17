import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
