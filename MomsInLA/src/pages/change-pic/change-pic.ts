import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ChangePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-pic',
  templateUrl: 'change-pic.html',
})
export class ChangePicPage {

  user:any = {};
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera,
    public localStorage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePicPage');
    this.localStorage.get('user').then(data => this.user=data);
  }

  async selectImage(index){

    let option: CameraOptions; 
    if(index==0){
      option = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: true,
        allowEdit:true,
        targetHeight:300,
        targetWidth:300,
        correctOrientation: true
      };
    }else{
      option = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        targetWidth:300,
        targetHeight: 300,
        correctOrientation: true
      }
    }
    let imageData = await this.camera.getPicture(option)
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    document.getElementById('protrait').style.backgroundImage = base64Image;
    let name = `/UserImg/${this.user.userID}`;
    await storage().ref(name).putString(base64Image, 'data_url',{contentType: 'image/png'});
    let imgUrl: string = await storage().ref(name).getDownloadURL();
    this.localStorage.set('user', {
      username: this.user.username,
      userImg: imgUrl,
      userID: this.user.userID,
      userStatus: this.user.userStatus
    });
  }

}
