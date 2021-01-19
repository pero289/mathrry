// +,-,*,/
exports.add = (a,b) => {
    return a+b;
}

exports.sub = (a,b) => {
    return a-b;
}

exports.divi = (a,b) => {
    return a/b;
}

exports.multi = (a,b) => {
    return a*b;
}

exports.revdivi = (a,b) => {
    return b/a;
}

exports.revmulti = (a,b) => {
    return b*a;
}

//
exports.dbp = (x1,y1,x2,y2) => {
    let value = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
    return value;
}