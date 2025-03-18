function receivesAFunction(cb){
    cb()
}
function returnsANamedFunction(){
    return function sleep(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}