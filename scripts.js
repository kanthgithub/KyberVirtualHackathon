 /**
  * For Roheat, we have this file that we shall copy paste and provide to our code injections.
  * Couple of gotchas to keep in mind here
  * 1. functions pasted in certain code blocks are available to other code blocks. So feel free to create as many code blocks as you like
  * Code Blocks === Embedded code that is added via Caard.
  * 2. variables can share data by doing a document.getElementById('insertIdHere').innerHTML = <pass your variable here>
  * 3. You can use let and consts and the caard doesn't seem to mind.
  * 4. I strongly suspect that we can even incorporate bootstrap into the application and do cooler buttons as and when needed.
  * 5. Currently our code only works with Metamask, we can enable other tools like Infura later on, no big deal there.
  */
 
/**
 * COPY BELOW CODE AND PASTE IT INTO scripts.js
 */
<script>
let web3;
function login() {
 if (window.ethereum) {
 // Request account access
 window.ethereum.enable()
 .then(response => {
 console.log('response ', response);
 web3 = response;
 })
 .catch(error => {
 console.log('permission not granted to web3, we\'re screwed.');
 });
 }
}
</script>

/**
 * COPY ABOVE CODE AND PASTE IT INTO scripts.js
 */


// A simple dummy login button I put in there.
<button onclick="login()" >
 Login to MetaMask
</button>