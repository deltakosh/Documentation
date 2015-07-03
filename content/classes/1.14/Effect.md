---
ID_PAGE: 3311
PG_TITLE: Effect
PG_VERSION: 1.14
---
##new [Effect](page.php?p=3311)(baseName, attributesNames, uniformsNames, samplers, engine, defines, fallbacks, onCompiled, onError)

The [Effect](page.php?p=3311) constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | baseName | any | The base name of the effect (The name of file without .fragment.fx or .vertex.fx)
 | attributesNames | string[] | An array containing the list of attributes.
 | uniformsNames | string[] | An array containing the list of uniforms names.
 | samplers | string[] | @param samplers
 | engine | any | The given engine
optional | defines | string | The list of defines used by this effect.
optional | fallbacks | [EffectFallbacks](page.php?p=3310) | @param fallbacks
optional | onCompiled | (effect: [Effect](page.php?p=3311)) =&gt; void | Function called when given effect are successfully compiled
optional | onError | (effect: [Effect](page.php?p=3311), errors: string) =&gt; void | Function called when an error occurs
---

##Members

###name : any


The effect name

###defines : string


The array of defines used by this effect

###onCompiled : (effect: [Effect](page.php?p=3311)) =&gt; void


Function called when given effect are successfully compiled

###onError : (effect: [Effect](page.php?p=3311), errors: string) =&gt; void


Function called when an error occurs

###static ShadersStore : {}


Object which contains the list of shaders



##Methods

###isReady() &rarr; boolean
Function to know if effect is ready


###getProgram() &rarr; WebGLProgram
Return the shader program linked to this effect


###getAttributesNames() &rarr; string[]
Return attributes names of the effect


###getAttributeLocation(index) &rarr; number
Return the attribute location at the specified index

####Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | The given index
---

###getAttributeLocationByName(name) &rarr; number
Return the attribute location at the specified name

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getAttributesCount() &rarr; number
Return the number of attributes


###getUniformIndex(uniformName) &rarr; number
Return the index of the searched name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
---

###getUniform(uniformName) &rarr; WebGLUniformLocation
Return searched parameter if exist

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
---

###getSamplers() &rarr; string[]
Return samplers


###getCompilationError() &rarr; string
Return the program compilation error


###setTexture(channel, texture) &rarr; void
Set the texture to the effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | @param channel
 | texture | [BaseTexture](page.php?p=3317) | The given texture
---

###setTextureFromPostProcess(channel, postProcess) &rarr; void
Set the texture to the effect from post process

####Parameters
 | Name | Type | Description
---|---|---|---
 | channel | string | @param channel
 | postProcess | [PostProcess](page.php?p=3346) | The given post process
---

###setArray(uniformName, array) &rarr; [Effect](page.php?p=3311)
Set the array given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | array | number[] | The array
---

###setMatrices(uniformName, matrices) &rarr; [Effect](page.php?p=3311)
Set the matrice given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | matrices | Float32Array | The matrices
---

###setMatrix(uniformName, matrix) &rarr; [Effect](page.php?p=3311)
Set the matrix given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | matrix | [Matrix](page.php?p=3329) | the matrix
---

###setFloat(uniformName, value) &rarr; [Effect](page.php?p=3311)
Set the float given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | value | number | The float
---

###setBool(uniformName, bool) &rarr; [Effect](page.php?p=3311)
Set the boolean given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | bool | boolean | The boolean
---

###setVector2(uniformName, vector2) &rarr; [Effect](page.php?p=3311)
Set the vector2 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | vector2 | [Vector2](page.php?p=3326) | The vector2
---

###setFloat2(uniformName, x, y) &rarr; [Effect](page.php?p=3311)
Set the float2 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | x | number | The value on x axis
 | y | number | The value on y axis
---

###setVector3(uniformName, vector3) &rarr; [Effect](page.php?p=3311)
Set the [Vector3](page.php?p=3327) given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | vector3 | [Vector3](page.php?p=3327) | The vector3
---

###setFloat3(uniformName, x, y, z) &rarr; [Effect](page.php?p=3311)
Set the float3 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | x | number | The value on x axis
 | y | number | The value on y axis
 | z | number | The value on z axis
---

###setFloat4(uniformName, x, y, z, w) &rarr; [Effect](page.php?p=3311)
Set the float4 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | x | number | The value on x axis
 | y | number | The value on y axis
 | z | number | The value on z axis
 | w | number | The rotation
---

###setColor3(uniformName, color3) &rarr; [Effect](page.php?p=3311)
Set the color3 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | color3 | [Color3](page.php?p=3324) | The color
---

###setColor4(uniformName, color3, alpha) &rarr; [Effect](page.php?p=3311)
Set the color4 given by its name

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | The given uniform name
 | color3 | [Color3](page.php?p=3324) | The color
 | alpha | number | Alpha is the transparency between 0 and 1.
---