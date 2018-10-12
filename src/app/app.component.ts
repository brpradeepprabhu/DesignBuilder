import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesignBuilder';
  constructor(private appService: AppServiceService) {
    let menu = '<div class="accordion" id="accordionExample">';

    //   <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    //     <div class="card-body">
    //       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    //     </div>
    //   </div>
    // </div>
    this.appService.getJSON().subscribe(data => {
      const menuHeader = Object.keys(data);
      for (let i = 0; i < menuHeader.length; i++) {
        console.log(menuHeader)
        const header =
          '<div class="card">  <div class="card-header" id="heading' +
          menuHeader[i] +
          '"><h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' +
          menuHeader[i] +
          '" aria-expanded="true" aria-controls="' +
          menuHeader[i] +
          '">' +
          menuHeader[i] +
          '</button></h5></div>';

        let body =
          '<div id="collapse' +
          menuHeader[i] +
          '" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">  <div class="card-body">';

        for (let j in data[menuHeader[i]]) {
          body += '<div>' + j + '</div>';
        }
        body += '</div> </div></div>';
        menu += header + body;
        console.log(menu);
       
      }
      $('#menu').append(menu);
    });
  }
}
