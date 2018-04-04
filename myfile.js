var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
var mydata = tokenizer.tokenizer("book a flight")
for(var i = 0 ; i < mydata.legth ; i++){
if (mydata[i] == 'book'){
console.log('customer wants to book a ticket')
}
}
