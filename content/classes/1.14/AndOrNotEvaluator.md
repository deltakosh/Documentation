---
ID_PAGE: 3391
PG_TITLE: AndOrNotEvaluator
PG_VERSION: 1.14
---



##Methods

###static Eval(query, evaluateCallback) &rarr; boolean
Returns the query result about [Tags](page.php?p=3383) on javascript objects

####Parameters
 | Name | Type | Description
---|---|---|---
 | query | string | The given query example :  (tag1 &amp;&amp; (tag2 || tag4 || !tag5)) || !(!tag1) &amp;&amp; !!!tag5
 | evaluateCallback | (val: any) =&gt; boolean | A callback function, internally used to return found objects
---