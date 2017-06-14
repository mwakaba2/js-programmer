class NetworkClient {
  constructor(sendFunction, callback) {
    NetworkClient.id ++;
    this.sendFunction = sendFunction;
    this.callback = callback;
    this.id = NetworkClient.id;
    NetworkClient.cache = [];
  }

  send(data) {
    let alreadyRecieved = NetworkClient.cache.find((client) => {
      return client.key === data;
    });
    if(!alreadyRecieved) {
      NetworkClient.cache.push({
        key: data,
        index: this.id,
        send: true
      });
      this.sendFunction(data);
    }
  }

  recv(data) {
    let canGo = false;
    let first = true;
    for(let client of NetworkClient.cache) {
      if(client.index !== this.id) {
        if(client.send) {
          if(client.key === data && first) {
            canGo = true;
          }
          first = false;
        }
        if(canGo && client.send) {
          this.callback(client.key);
          client.send = false;
        }
      }
    }
  }
}

NetworkClient.id = 0;

class ImperfectNetwork {
  constructor(callbackA, callbackB) {
    const network = this;
    this.clientA = new NetworkClient(
        function (data) { network.clientB.recv(data); }, callbackA);
    this.clientB = new NetworkClient(
        function (data) { network.clientA.recv(data); }, callbackB);
  }
}

module.exports = { NetworkClient, ImperfectNetwork };
