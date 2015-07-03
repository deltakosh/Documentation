---
ID_PAGE: 6826
PG_TITLE: FilesInput
PG_VERSION: 2.1
---
##new [FilesInput](page.php?p=6826)(p_engine, p_scene, p_canvas, p_sceneLoadedCallback, p_progressCallback, p_additionnalRenderLoopLogicCallback, p_textureLoadingCallback, p_startingProcessingFilesCallback)







####Parameters
 | Name | Type | Description
---|---|---|---
 | p_engine | [Engine](page.php?p=6629) | @param p_engine
 | p_scene | [Scene](page.php?p=6662) | @param p_scene
 | p_canvas | HTMLCanvasElement | @param p_canvas
 | p_sceneLoadedCallback | any | @param p_sceneLoadedCallback
 | p_progressCallback | any | @param p_progressCallback
 | p_additionnalRenderLoopLogicCallback | any | @param p_additionnalRenderLoopLogicCallback
 | p_textureLoadingCallback | any | @param p_textureLoadingCallback
 | p_startingProcessingFilesCallback | any | @param p_startingProcessingFilesCallback
---

##Members

###static FilesTextures : any[]




The array that holds the png textures to load



###static FilesToLoad : any[]




The array that holds the vnd.ms-dds files to load











##Methods

###monitorElementForDragNDrop(p_elementToMonitor) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | p_elementToMonitor | HTMLElement | It could be the rendering canvas or whatever element on the page
---

###loadFiles(event) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | event | any | 
---

###reload() &rarr; void
