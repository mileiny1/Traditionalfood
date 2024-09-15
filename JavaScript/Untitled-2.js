// JavaScript Document
// scripts.js
function checkUsername() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length < 5){
		elMsg.textContent = 'Username must be 5 characters or more';
	} else {
		
	elMsg.textContent = '';
		
		var elUsername = document.getElementById('username'); // Get username input
		elUsername.onblur = checkUsername; // When it loses focus call checkuserName()
	}
}
      

