import Web3 from 'web3'
import contract from 'truffle-contract'
import artifacts from '../../build/contracts/DEEContract.json'

const CL = contract(artifacts)
let accounts;

export default{
  CL,
  accounts: this.accounts,
  account: this.account,
  initWeb3(){
    console.log("init web3");

    if (typeof web3 !== 'undefined') {
      console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 Fluyd, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
      // Use Mist/MetaMask's provider
      web3 = new Web3(web3.currentProvider)
    } else {
      console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask")

      alert("No Web3, did you install metamask?");
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
    }

    CL.setProvider(web3.currentProvider)
    web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        console.error(err)
        this.message = "There was an error fetching your accounts. Do you have Metamask, Mist installed or an Ethereum node running? If not, you might want to look into that"
        return
      }

      if (accs.length == 0) {
        this.message = "Couldn't get any accounts! Make sure your Ethereum client is configured correctly."
        return
      }

      this.accounts = accs;
      this.account = accs[0];



      web3.eth.getBalance(this.account, (err, balance) => {
        this.balance = web3.fromWei(balance, "ether") + " ETH"
        console.log("account: "+this.account +" " + this.balance);
      });

      // console.log(this.account +" " + this.balance);


      CL.deployed()
      .then((instance) => instance.address)
      .then((address) => {
        console.log ("contract: "+address);

      })
    })
  }

}