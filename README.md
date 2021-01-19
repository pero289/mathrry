# mathrry

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

## Coordinate things
### The Distance between two points
```js
mathrry.Dbtp(x1,y1,x2,y2)
```  
`x1, x2` are the coordinates of the first point, `x2, y2` are the coordinates of the second point.
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

