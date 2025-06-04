import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';

@WebSocketGateway({ cors: true })
export class MessagesWsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  private wss: Server;

  constructor(
    private readonly messagesWsService: MessagesWsService
  ) {}
  
  handleConnection(client: Socket) {
    this.messagesWsService.registerClient(client);
    this.wss.emit('clients-updated',  this.messagesWsService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    this.messagesWsService.removeClient(client.id);
    this.wss.emit('clients-updated', this.messagesWsService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  handleMessageFromClient(client: Socket, payload: NewMessageDto) {
    // TODO: Handle message from client
    console.log('message-from-client', client.id, payload);
  }

}

