const { expect } = require('chai');
const { NetworkClient, ImperfectNetwork } = require('./networkClient');

describe('Imperfect Network', () => {
  let imperfectNetwork;
  let aQueue;
  let bQueue;
  let count;
  beforeEach(() => {
    inOrder = [];
    count = 0;
    imperfectNetwork = new ImperfectNetwork(
      function (data) {
        inOrder.push(data);
        console.log("CLIENT-A Got: " + data);
      },
      function (data) {
        inOrder.push(data);
        console.log("CLIENT-B Got: " + data);
      }
    );
  });

  it('can send data once', () => {
    imperfectNetwork.clientA.send("abcd");
    imperfectNetwork.clientA.send("wxyz");
    imperfectNetwork.clientB.send("1234");
    imperfectNetwork.clientB.send("1234");
    imperfectNetwork.clientA.send("EOF");
    expect(inOrder).to.deep.equal([
      "abcd",
      "wxyz",
      "1234",
      "EOF"
    ]);
  });
});