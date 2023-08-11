class Socket {
	private static instance: Socket;

	private static ws: WebSocket;
	private constructor(url: string) {
		Socket.ws = new WebSocket(url);
	}
    
	public static getInstance(url: string): Socket {
		if(!this.instance){
			Socket.instance = new Socket(url);
		}
		return this.instance;
	}
}