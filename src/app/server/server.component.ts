import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 666;
  serverStatus: string = 'running';

  getServerStatus() {
    return this.serverStatus;
  }
}
