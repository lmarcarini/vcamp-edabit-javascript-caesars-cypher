const isLetter = (c) => new RegExp(/[a-z]/i).test(c);
const isLowerCase = (c) => new RegExp(/[a-z]/).test(c);
const shiftChar = (c, k) => {
	baseCode=isLowerCase(c) ? 97 : 65;
	return String
		.fromCharCode((c.charCodeAt(0)+k-baseCode)%26+baseCode)
}

const caesarCipher = (string, k) =>
	string
		.split("")
		.map(c=> isLetter(c) ? shiftChar(c,k) : c)
		.join("")
