import { Component, NgZone, Inject } from '@angular/core';
import { NgUploaderOptions, UploadedFile } from 'ngx-uploader';


@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions: NgUploaderOptions = {
    url: '',
  };

  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  beforeUpload(uploadingFile: UploadedFile) {
    console.log(uploadingFile);
  }
  pictureUploaded() {
    console.log("entrou");
  }

  handleUserUpdated(data) {
    console.log(data);
  }
  options: NgUploaderOptions;
  response: any;
  hasBaseDropZoneOver: boolean;
  constructor( @Inject(NgZone) private zone: NgZone) {
    // this.options = new NgUploaderOptions({
    //   url: 'http://api.ngx-uploader.com/upload',
    //   autoUpload: true,
    //   calculateSpeed: true
    // });
  }


  ngOnInit() {
  }
}
