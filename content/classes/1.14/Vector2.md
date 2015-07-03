---
ID_PAGE: 3326
PG_TITLE: Vector2
PG_VERSION: 1.14
---
##new [Vector2](page.php?p=3326)(x, y)

Creates a new [Vector2](page.php?p=3326)
####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The initial X coordinate
 | y | number | The initial Y coordinate
---

##Members

###x : number


The first coordinate

###y : number


The second coordinate



##Methods

###toString() &rarr; string
Returns a string representation of the vector


###toArray(array, index) &rarr; void
Fills an array from a given index with the vector's coordinates

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The array to fill
optional | index | number | default : 0 The given index
---

###asArray() &rarr; number[]
Returns an array representation of the vector


###copyFrom(source) &rarr; void
Copies another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Vector2](page.php?p=3326) | The source vector
---

###copyFromFloats(x, y) &rarr; void
Copies another vector in float form

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
---

###add(otherVector) &rarr; [Vector2](page.php?p=3326)
Adds an another vector and returns the result as a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
---

###addVector3(otherVector) &rarr; [Vector2](page.php?p=3326)
Adds the vector, the vector3's x and y

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector3](page.php?p=3327) | Another vector
---

###subtract(otherVector) &rarr; [Vector2](page.php?p=3326)
Substracts another vector and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
---

###subtractInPlace(otherVector) &rarr; void
Substracts another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
---

###multiplyInPlace(otherVector) &rarr; void
Multiply by another vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
---

###multiply(otherVector) &rarr; [Vector2](page.php?p=3326)
Multiply by another vector and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
---

###multiplyToRef(otherVector, result) &rarr; void
Multiply by another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
 | result | [Vector2](page.php?p=3326) | The target vector
---

###multiplyByFloats(x, y) &rarr; [Vector2](page.php?p=3326)
Multiply by another vector in float form and returns the result in a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The X coordinate of another vector
 | y | number | The Y coordinate of another vector
---

###divide(otherVector) &rarr; [Vector2](page.php?p=3326)
Divides by another vector and returns the result nin a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
---

###divideToRef(otherVector, result) &rarr; void
Divides by another vector into a third target vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | Another vector
 | result | [Vector2](page.php?p=3326) | The target vector
---

###negate() &rarr; [Vector2](page.php?p=3326)
Returns the opposite vector, that is the vector with opposite coordinates


###scaleInPlace(scale) &rarr; [Vector2](page.php?p=3326)
Scales the vector with the given factor

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###scale(scale) &rarr; [Vector2](page.php?p=3326)
Scales the vector and retruns the result as a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###equals(otherVector) &rarr; boolean
Tests if two vectors are equal
Returns true if X,Y coordinates are equal

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherVector | [Vector2](page.php?p=3326) | The vector to test against
---

###length() &rarr; number
The length of the vector


###lengthSquared() &rarr; number
The squared length of the vector


###normalize() &rarr; [Vector2](page.php?p=3326)
Normalizes a vector


###clone() &rarr; [Vector2](page.php?p=3326)
Clones a vector


###static Zero() &rarr; [Vector2](page.php?p=3326)
Returns a new [Vector2](page.php?p=3326) with x and y to zero


###static FromArray(array, offset) &rarr; [Vector2](page.php?p=3326)
Creates a new vector from a given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array
optional | offset | number | The first index of the array to look at
---

###static FromArrayToRef(array, offset, result) &rarr; void
Sets an existing vector from a given array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The given array
 | offset | number | The first index of the array to look at
 | result | [Vector2](page.php?p=3326) | The existing vector
---

###static CatmullRom(value1, value2, value3, value4, amount) &rarr; [Vector2](page.php?p=3326)
Performs a Catmull-Rom interpolation using the specified positions.
When the method completes, returns the result of the Catmull-Rom interpolation

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](page.php?p=3326) | The first position in the interpolation.
 | value2 | [Vector2](page.php?p=3326) | The second position in the interpolation.
 | value3 | [Vector2](page.php?p=3326) | The third position in the interpolation.
 | value4 | [Vector2](page.php?p=3326) | The fourth position in the interpolation.
 | amount | number | Weighting factor.
---

###static Clamp(value, min, max) &rarr; [Vector2](page.php?p=3326)
Restricts a value to be within a specified range.

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Vector2](page.php?p=3326) | The value to clamp
 | min | [Vector2](page.php?p=3326) | The minimum value
 | max | [Vector2](page.php?p=3326) | The maximum value
---

###static Hermite(value1, tangent1, value2, tangent2, amount) &rarr; [Vector2](page.php?p=3326)
Performs a Hermite spline interpolation.

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](page.php?p=3326) | First source position vector.
 | tangent1 | [Vector2](page.php?p=3326) | First source tangent vector.
 | value2 | [Vector2](page.php?p=3326) | Second source position vector.
 | tangent2 | [Vector2](page.php?p=3326) | Second source tangent vector.
 | amount | number | Weighting factor.
---

###static Lerp(start, end, amount) &rarr; [Vector2](page.php?p=3326)
Performs a linear interpolation between two vectors.

####Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Vector2](page.php?p=3326) | interpolation start vector
 | end | [Vector2](page.php?p=3326) | interpolation end vector
 | amount | number | Weighting factor
---

###static Dot(left, right) &rarr; number
Dot product between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](page.php?p=3326) | first operand
 | right | [Vector2](page.php?p=3326) | second operand
---

###static Normalize(vector) &rarr; [Vector2](page.php?p=3326)
Normalizes a vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](page.php?p=3326) | 
---

###static Minimize(left, right) &rarr; [Vector2](page.php?p=3326)
Minimizes the left vector with the right vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](page.php?p=3326) | The vector to minimize
 | right | [Vector2](page.php?p=3326) | The vector used to minimize
---

###static Maximize(left, right) &rarr; [Vector2](page.php?p=3326)
Maximizes the left vector with the right vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | left | [Vector2](page.php?p=3326) | The vector to maximize
 | right | [Vector2](page.php?p=3326) | the vector used to maximize
---

###static Transform(vector, transformation) &rarr; [Vector2](page.php?p=3326)
Transforms a vector into a new vector

####Parameters
 | Name | Type | Description
---|---|---|---
 | vector | [Vector2](page.php?p=3326) | The vector to transform
 | transformation | [Matrix](page.php?p=3329) | The transformation matrix
---

###static Distance(value1, value2) &rarr; number
Returns the distance between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](page.php?p=3326) | first vector
 | value2 | [Vector2](page.php?p=3326) | second vector
---

###static DistanceSquared(value1, value2) &rarr; number
Returns the squared distance between two vectors

####Parameters
 | Name | Type | Description
---|---|---|---
 | value1 | [Vector2](page.php?p=3326) | first vector
 | value2 | [Vector2](page.php?p=3326) | second vector
---