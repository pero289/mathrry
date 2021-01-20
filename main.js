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

//Points
exports.Dbtp = (x1,y1,x2,y2) => {
    let value = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
    return value;
}

exports.Dbptl = (x, y, expa, expb, expc) => {
    value = Math.abs(expa*x + expb*y + expc)/Math.sqrt(Math.pow(expa,2)+Math.pow(expb,2))
    return value;
}

// Triangle

//Centroid of Triangle
exports.CoT = (x1,y1,x2,y2,x3,y3) => {
    return ("x:" + (x1+x2+x3)/3 + " y:" + (y1+y2+y3)/3)
}
exports.CoTx = (x1,y1,x2,y2,x3,y3) => {
    return ((x1+x2+x3)/3)
}
exports.CoTy = (x1,y1,x2,y2,x3,y3) => {
    return ((y1+y2+y3)/3)
}


// Area things

// Triangle
exports.Aotw3p = (x1,y1,x2,y2,x3,y3) => {
    let value = 0.5*Math.abs(x1*y2 + x2*y3 + x3*y1 - x2*y1 - x3*y2 - x1*y3)
    return value;
}

exports.Aotw3ls = (l1, l2, l3) => {
    if (l1>0 && l2 > 0 && l3 > 0){
        if (Math.max(l1,l2,l3) > l1+l2+l3 - Math.max(l1,l2,l3)){
            return Error;
        }
    
        else {
            let s = 0.5*(l1+l2+l3)
            let value = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3))
            return value;
        }
    }
    else {
        return Error;
    }
}

// Circle
exports.AoC = (r) => {
    if (r>0) {
        return Math.pow(r,2)*Math.PI
    }
    else {
        return Error;
    }
}

// 3D
// Coordinate things
// Points
exports.TDbtp = (x1,y1,z1,x2,y2,z2) => {
    value = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2))
    return value;
}

// Cubes
// The Diagonal of the cube
exports.TdoC = (l) => {
    if (l>0) {
        return Math.sqrt(Math.pow(l,2)*3)
    }
    else {
        return Error;
    }
}
// Cube
// Volume of Cube
exports.TVoC = (l) => {
    if (l>0) {
        return Math.pow(l,3)
    }
    else {
        return Error;
    }
}

//Sphere
// Volume of Sphere
exports.TVoS = (r) => {
    if (r>0) {
        return (4/3)*Math.PI*Math.pow(r,3)
    }
    else {
        return Error;
    }
}