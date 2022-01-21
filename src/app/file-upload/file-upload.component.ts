import { Component, OnInit, Output } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { FileUploadService } from 'src/app/file-upload/file-upload.service';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { MessangerService } from '../services/messanger.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  private readonly notifier: NotifierService;

  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService, private messangerService: MessangerService,
    notifierService: NotifierService) {
      this.notifier = notifierService; }

  ngOnInit() {

  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
    this.message = [];
  
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Dodawanie zdjęcia zakończone pomyślnie: ' + file.name;
            this.notifier.notify('success', 'Dodawanie zdjęcia zakończone pomyślnie');
            this.fileInfos = this.uploadService.getFiles();
            this.messangerService.getFile(file.name);
            this.message.push(msg);
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Dodawanie zdjęcia zakończone niepomyślnie: ' + file.name;
          this.notifier.notify('error', 'Dodawanie zdjęcia zakończone niepomyślnie');
          this.message.push(msg);
        });
    }
  }
}
