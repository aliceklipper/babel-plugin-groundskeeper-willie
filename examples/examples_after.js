/* eslint-disable */
console.log(`I'll be preserved!`); // groundskeeper-willie-disable-line

() => {
  here.we['do'].something();
  debugger; // groundskeeper-willie-disable-line
}

module.exports = {
  prodFunction(){ /* ... */ },
  otherProdCode(){ /* ... */ }
};

module.exports = {
    appCode(){
        return [
            'included',
            'also included'];
    }
};
