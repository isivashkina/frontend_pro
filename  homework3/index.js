let correctUserName = false,
    userName,
    userSpace,
    nextWord,
    correctSurname = false,
    userSurname,
    userHyphen,
    nextWordSurname,
    correctEmail = false,
    userEmail,
    correctYear = false,
    userYear,
    age;
const currentDate = new Date();

while(!correctUserName){
    userName = prompt(`What is your name?`);
    if(userName) {
        userName = userName.trim();
        if(userName !==''){
            userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
            if ((userSpace = userName.indexOf(' ')) > -1) {
                nextWord = userName[userSpace+1].toUpperCase();
                userName = userName.slice(0, userSpace+1) + nextWord + userName.slice(userSpace+2);
            }
            correctUserName = true;
        }
    }
}

while(!correctSurname){
    userSurname = prompt(`What is your surname?`);
    if(userSurname){
        userSurname = userSurname.trim();
        if(userSurname !==''){
            userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
            if ((userHyphen = userSurname.indexOf('-')) > -1) {
                nextWordSurname = userSurname[userHyphen+1].toUpperCase();
                userSurname = userSurname.slice(0, userHyphen+1) + nextWordSurname + userSurname.slice(userHyphen+2);
            } 
            correctSurname = true;
        }
    }
}

while(!correctEmail){
    userEmail = prompt(`Enter email`);
    if(userEmail){
        userEmail = userEmail.replaceAll(' ' , '').toLowerCase();
        if(userEmail !=='' 
            && userEmail.includes(`@`) 
            && !userEmail.startsWith(`@`) 
            && !userEmail.endsWith(`@`)
        ){
            correctEmail = true;
        }
    }
}

while(!correctYear){
    userYear = prompt(`Enter year of birth`);
    if(userYear){
        userYear = userYear.replaceAll(' ' , '');
        if(userYear !=='' 
            && !isNaN(userYear) 
            && parseInt(userYear) > 0 
            && parseInt(userYear) < currentDate.getFullYear()
        ){
            age = new Date().getFullYear() - userYear;
            userYear = age;
            correctYear = true;
        }
    }
}

document.write(`
	<ul>
		<li>Full name: ${userName} ${userSurname} </li>
		<li>Email: ${userEmail} </li>
		<li>Age: ${userYear} </li>
	</ul>
`);