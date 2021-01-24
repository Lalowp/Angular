import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online {
        color: white;
    }`]
})
export class ServerComponent {
    Id = 10; 
    serverStatus: string = 'offline'; 
    allowedServer = false; 
    serverCreationStatus = 'No server was created!'; 
    serverName = 'TestServer';
    serverCreated = false; 
    servers = ['TestServer', 'TestServer2']; 

    constructor() {
        setTimeout(() => {
            this.allowedServer = true; 
        }, 2000); 

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServiceStatus() {
        return this.serverStatus; 
    }

    onCreateServer(){
        this.servers.push(this.serverName);
        this.serverCreated = true; 
        this.serverCreationStatus = 'Server was created! Name is' + this.serverName; 
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value; 
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}