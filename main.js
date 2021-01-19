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

// Coordinate things
exports.Dbtp = (x1,y1,x2,y2) => {
    let value = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
    return value;
}

// Area things

// Triangle
exports.Aotw3p = (x1,y1,x2,y2,x3,y3) => {
    let value = 0.5*Math.abs(x1*y2 + x2*y3 + x3*y1 - x2*y1 - x3*y2 - x1*y3)
    return value;
}

exports.Aotw3ls = (l1, l2, l3) => {
    let s = 0.5*(l1+l2+l3)
    let value = Math.sqrt(s*((s-l1)+(s-l2)+(s-l3)))
    return value;
}
// Circle
exports.AoC = (r) => {
    return Math.pow(r,2)*Math.PI
}