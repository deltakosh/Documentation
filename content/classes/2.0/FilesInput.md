---
ID_PAGE: 5873
PG_TITLE: FilesInput
PG_VERSION: 2.0
---
##new [FilesInput](page.php?p=5873)(p_engine, p_scene, p_canvas, p_sceneLoadedCallback, p_progressCallback, p_additionnalRenderLoopLogicCallback, p_textureLoadingCallback, p_startingProcessingFilesCallback)




####Parameters
 | Name | Type | Description
---|---|---|---
 | p_engine | [BABYLON](page.php?p=5696).Engine | @param p_engine
 | p_scene | [BABYLON](page.php?p=5696).Scene | @param p_scene
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