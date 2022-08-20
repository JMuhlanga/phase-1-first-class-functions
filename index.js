function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return (function namedFn(){ return `This is a named function`;});

}

function returnsAnAnonymousFunction(){
    return (function(){return `Anonymous Function`;});
}