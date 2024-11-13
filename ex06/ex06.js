var n=12345;
console.log((n%10)*100000+parseInt(n/10)%10*10000+parseInt(n/100)%10*1000+parseInt(n/1000)%10*100+parseInt(n/10000)%10*10);