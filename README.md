# mathrry
  [![Issues](https://img.shields.io/github/issues/Shio7/mathrry?style=for-the-badge)](https://github.com/Shio7/mathrry/issues)
  [![Stars](https://img.shields.io/github/stars/Shio7/mathrry?style=for-the-badge)](https://github.com/Shio7/mathrry)
  [![Forks](https://img.shields.io/github/forks/Shio7/mathrry?style=for-the-badge)](https://github.com/Shio7/mathrry/network/members)
  [![Downloads](https://img.shields.io/npm/dt/mathrry?style=for-the-badge)](https://www.npmjs.com/package/mathrry)
  [![License](https://img.shields.io/github/license/Shio7/mathrry?style=for-the-badge)](https://github.com/Shio7/mathrry)  
  
Simple Math Module

## Usage
### Basic arithmetic operations
```js
Addition: mathrry.add
Subtraction: mathrry.sub
Multiplication: mathrry.multi
Division: mathrry.divi
```  
### Extra
```js
mathrry.revdivi
mathrry.revmulti
```
```mathrry.revdivi``` is calculated by inverting the value. Think of it as the opposite of ```mathrry.divi```.  
  
```mathrry.revmulti``` also same as above.  

# 2D
## Coordinate things

### Points
#### The Distance between two points
```js
mathrry.Dbtp(x1,y1,x2,y2)
```  
`x1, x1` are the coordinates of the first point, `x2, y2` are the coordinates of the second point.

#### The Distance between point and line
```js
mathrry.Dbptl(x,y,exp-a,exp-b,exp-c)
```
`x,y` are the coordinates of the point, `exp-a, exp-b exp-c` are from `ax+by+c=0`. Put it in order.

### Triangle
#### Centroid of Triangle
```js
mathrry.CoT(x1,y1,x2,y2,x3,y3)
```
##### Extra
```js
mathrry.CoTx(x1,y1,x2,y2,x3,y3)
mathrry.CoTy(x1,y1,x2,y2,x3,y3)
```  
`mathrry.CoTx` returns the x-coordinate value of the centroid of triangle.  
`mathrry.CoTy` returns the y-coordinate value of the centroid of triangle.  
  
`x1, y1` are the coordinates of the first point, `x2, y2` are the coordinates of the second point, and `x3, y3` are the coordinates of the third point.  

## Area things
### Triangle
#### The Area of triangle with 3 points
```js
mathrry.Aotw3p(x1,y1,x2,y2,x3,y3)
```
`x1, y1` are the coordinates of the first point, `x2, y2` are the coordinates of the second point, and `x3, y3` are the coordinates of the third point.  
#### The Area of triangle with 3 line segments
```js
mathrry.Aotw3ls(l1, l2, l3)
```
`l1, l2, and l3` are the lengths of the sides of the triangle, respectively.  
### Circle
#### Area of Circle
```js
mathrry.AoC(r)
```
`r` is the radius of the circle for which you want to know the area.

# 3D
## Coordinate things
### Points
#### The Distance between two points in 3D
```js
mathrry.TDbtp(x1,y1,z1,x2,y2,z2)
```
`x1, x1, z1` are the coordinates of the first point, `x2, y2, z2` are the coordinates of the second point.  
### Cube
#### The Diagonal of the cube
```js
mathrry.TdoC(l)
```
`l` is the length of one side of the cube.

