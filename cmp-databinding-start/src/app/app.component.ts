import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements = [{type:'server', name: 'Testserver', content:'Just a test!'}];
newServerContent='';
newServerName='';
serverAdded(serverElement : {serverName : string , serverContent : string}) {
  this.serverElements.push({
    type: 'server',
    name: serverElement.serverName,
    content: serverElement.serverContent
  });
}

blueprintAdded(serverElement : {serverName : string , serverContent : string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: serverElement.serverName,
    content: serverElement.serverContent
  });
}
}
