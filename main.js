function encryptor(text, s)
    {
        let result=""
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if ((char.charCodeAt(0)>=65) &&(char.charCodeAt(0)<96))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }

function encrypt(){
	let pt = document.getElementById("plaintext").value;
	let key = document.getElementById("key").value;
	let ct = encryptor(pt,parseInt(key));
	document.getElementById("result").value=ct;
}

function decryptor(text, s)
    {
        let result="";
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if ((char.charCodeAt(0)>=65) &&(char.charCodeAt(0)<96))
            {	
			let a=(char.charCodeAt(0) - s-65) % 26 + 65;
			if(a>=91){
				a=a-90+64;	
			}	
                let ch =  String.fromCharCode(a);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) - s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }
function decrypt(){
	let ct = document.getElementById("ciphertext").value
	let key = document.getElementById("key").value
	let pt = decryptor(ct,parseInt(key))
	document.getElementById("result2").value=pt
}