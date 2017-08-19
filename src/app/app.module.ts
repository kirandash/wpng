import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Response } from '@angular/http';
import { PostsService } from './posts/posts.service';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';

import { WpngRoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent
  ],
  imports: [
    BrowserModule,
    WpngRoutingModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
