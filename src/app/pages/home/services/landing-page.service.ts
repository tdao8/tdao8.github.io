import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllSubject() {
    return this.httpClient.get(`${environment.landingPageServicesDomain}/subject/all`);
  }

  public getSubjectById(subjectId) {
    return this.httpClient.get(`${environment.landingPageServicesDomain}/subject/${subjectId}`);
  }

  public postSubject(subject: any) {
    return this.httpClient.post(`${environment.landingPageServicesDomain}/subject`, subject);
  }

  public putSubject(subject: any, subjectId: string) {
    return this.httpClient.put(`${environment.landingPageServicesDomain}/subject/${subjectId}`, subject);
  }

  public deleteSubject(subjectId: string) {
    return this.httpClient.delete(`${environment.landingPageServicesDomain}/subject/${subjectId}`);
  }

  public getAllArticle() {
    return this.httpClient.get(`${environment.landingPageServicesDomain}/article/all`);
  }

  public postArticle(article: any) {
    return this.httpClient.post(`${environment.landingPageServicesDomain}/article`, article);
  }

  public putArticle(article: any, articleId: string) {
    return this.httpClient.put(`${environment.landingPageServicesDomain}/article/${articleId}`, article);
  }

  public deleteArticle(articleId: string) {
    return this.httpClient.delete(`${environment.landingPageServicesDomain}/article/${articleId}`);
  }

  public getAllVideo() {
    return this.httpClient.get(`${environment.landingPageServicesDomain}/video/all`);
  }

  public postVideo(video: any) {
    return this.httpClient.post(`${environment.landingPageServicesDomain}/video`, video);
  }
  public putVideo(video: any, videoId: string) {
    return this.httpClient.put(`${environment.landingPageServicesDomain}/video/${videoId}`, video);
  }
  public deleteVideo(videoId: string) {
    return this.httpClient.delete(`${environment.landingPageServicesDomain}/video/${videoId}`);
  }

  public getAllQA() {
    return this.httpClient.get(`${environment.landingPageServicesDomain}/quest-answer/all`);
  }
  public postQA(qa: any) {
    return this.httpClient.post(`${environment.landingPageServicesDomain}/quest-answer`, qa);
  }
  public putQA(qa: any, qaId: string) {
    return this.httpClient.put(`${environment.landingPageServicesDomain}/quest-answer/${qaId}`, qa);
  }
  public deleteQA(qaId: string) {
    return this.httpClient.delete(`${environment.landingPageServicesDomain}/quest-answer/${qaId}`);
  }
}
