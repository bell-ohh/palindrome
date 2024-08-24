

function isPalin(str) {
	let j = str.length - 1;
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[j]) {
			return false;
		}
		j--;
	}
	return true;
}
let str1 = "kayak";
let str2 = "mom";
let str3 = "fortify";
let str4 = "eye";

console.log(isPalin(str1));
console.log(isPalin(str2));
console.log(isPalin(str3));
console.log(isPalin(str4));
