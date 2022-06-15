import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-plus-image',
  templateUrl: './form-plus-image.component.html',
  styleUrls: ['./form-plus-image.component.css']
})

export class FormPlusImageComponent {
  constructor(private httpClient: HttpClient) { }

  uploadedImage?: File;
  dbImage: any;
  postResponse: any;
  successResponse?: string;
  image: any;

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {
    if(this.uploadedImage==undefined){return};
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


    this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    }

  viewImage() {
    this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }
}


