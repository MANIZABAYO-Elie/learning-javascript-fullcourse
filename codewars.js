 function reverseWords(str){
        //   const arrayWords = str.split(' ');
        //    const reversedArray = arrayWords.reverse(' ');
        //    return reversedArray.join(' ');
        const reversedwords = str.split(' ').reverse(' ').join(' ');
        return reversedwords;
}
console.log(reverseWords("Hello World"));
