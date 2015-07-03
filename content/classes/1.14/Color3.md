---
ID_PAGE: 3324
PG_TITLE: Color3
PG_VERSION: 1.14
---
##new [Color3](page.php?p=3324)(r, g, b)

Creates a new RGB [Color3](page.php?p=3324)
####Parameters
 | Name | Type | Description
---|---|---|---
optional | r | number | The initial red value
optional | g | number | The initial green value
optional | b | number | The initial blue value
---

##Members

###r : number


red value

###g : number


green value

###b : number


blue value



##Methods

###toString() &rarr; string
Returns a string representation of the color


###toArray(array, index) &rarr; void
Fills an array from a given index with the color's RGB values

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | The array to fill
optional | index | number | The given index
---

###toColor4(alpha) &rarr; [Color4](page.php?p=3325)
Return a [Color4](page.php?p=3325) object

####Parameters
 | Name | Type | Description
---|---|---|---
optional | alpha | number | default : 1 The given alpha
---

###asArray() &rarr; number[]
Returns an array representation of the color


###toLuminance() &rarr; number
Returns the luminance of the color


###multiply(otherColor) &rarr; [Color3](page.php?p=3324)
Multiplies two [Color3](page.php?p=3324) and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The other color to multiply
---

###multiplyToRef(otherColor, result) &rarr; void
Multiplies two [Color3](page.php?p=3324) into an existing Color

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The other color to multiply
 | result | [Color3](page.php?p=3324) | The color that will contain the result
---

###equals(otherColor) &rarr; boolean
Tests if two [Color3](page.php?p=3324) have the same rgb values

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The other color to test
---

###scale(scale) &rarr; [Color3](page.php?p=3324)
Scales a [Color3](page.php?p=3324) : multiply red, green and blue values by the given number

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
---

###scaleToRef(scale, result) &rarr; void
Scale a [Color3](page.php?p=3324) into an existing Color

####Parameters
 | Name | Type | Description
---|---|---|---
 | scale | number | The scaling factor
 | result | [Color3](page.php?p=3324) | The color that will contain the result
---

###add(otherColor) &rarr; [Color3](page.php?p=3324)
Adds another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The color to add
---

###addToRef(otherColor, result) &rarr; void
Adds another color and store the result in the color given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The color to add
 | result | [Color3](page.php?p=3324) | The resulting color
---

###subtract(otherColor) &rarr; [Color3](page.php?p=3324)
Substracts another color and returns the result

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The color to substract
---

###subtractToRef(otherColor, result) &rarr; void
Substracts another color and store the result in the given color

####Parameters
 | Name | Type | Description
---|---|---|---
 | otherColor | [Color3](page.php?p=3324) | The color to substract
 | result | [Color3](page.php?p=3324) | The resulting color
---

###clone() &rarr; [Color3](page.php?p=3324)
Create a clone of a [Color3](page.php?p=3324)


###copyFrom(source) &rarr; void
Copies a [Color3](page.php?p=3324)

####Parameters
 | Name | Type | Description
---|---|---|---
 | source | [Color3](page.php?p=3324) | color to copy from
---

###copyFromFloats(r, g, b) &rarr; void
Copies a color from numbers

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | The red value
 | g | number | The green value
 | b | number | The blue value
---

###static FromArray(array) &rarr; [Color3](page.php?p=3324)
Creates a new [Color3](page.php?p=3324) from an array

####Parameters
 | Name | Type | Description
---|---|---|---
 | array | number[] | An array of rgb values
---

###static FromInts(r, g, b) &rarr; [Color3](page.php?p=3324)
Creates a new [Color3](page.php?p=3324) from a set of integers. Values must be between 0 and 255

####Parameters
 | Name | Type | Description
---|---|---|---
 | r | number | The red value (0&lt;r&lt;255)
 | g | number | The green value (0&lt;g&lt;255)
 | b | number | The blue value (0&lt;b&lt;255)
---

###static Lerp(start, end, amount) &rarr; [Color3](page.php?p=3324)
Linear interpolation of a color

####Parameters
 | Name | Type | Description
---|---|---|---
 | start | [Color3](page.php?p=3324) | interpolation start color
 | end | [Color3](page.php?p=3324) | interpolation end color
 | amount | number | Weighting factor
---

###static Red() &rarr; [Color3](page.php?p=3324)
Red color


###static Green() &rarr; [Color3](page.php?p=3324)
Green color


###static Blue() &rarr; [Color3](page.php?p=3324)
Blue color


###static Black() &rarr; [Color3](page.php?p=3324)
Black color


###static White() &rarr; [Color3](page.php?p=3324)
White color


###static Purple() &rarr; [Color3](page.php?p=3324)
Purple color


###static Magenta() &rarr; [Color3](page.php?p=3324)
Magenta color


###static Yellow() &rarr; [Color3](page.php?p=3324)
Yellow color


###static Gray() &rarr; [Color3](page.php?p=3324)
Gray color
