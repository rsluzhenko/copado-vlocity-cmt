export const OMNIDEF = {"userTimeZone":-480,"userProfile":"System Administrator","userName":"joemcmaster@comms2021.demo","userId":"0058Y00000CbLEUAA4","userCurrencyCode":"USD","timeStamp":"2022-11-16T19:52:50.828Z","sOmniScriptId":"a2s8Y000006YBUUQA4","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"wpm":false,"visualforcePagesAvailableInPreview":{},"trackingCustomData":{},"timeTracking":false,"stylesheet":{"newportRtl":"","newport":"","lightningRtl":"","lightning":""},"stepChartPlacement":"right","ssm":false,"showInputWidth":false,"seedDataJSON":{},"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveNameTemplate":null,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveContentEncoded":false,"rtpSeed":false,"pubsub":false,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":null,"itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":null,"itemsKey":"knowledgeItems","id":"vlcKnowledge"}],"message":{},"lkObjName":null,"knowledgeArticleTypeQueryFieldsMap":{},"hideStepChart":false,"errorMessage":{"custom":[]},"enableKnowledge":false,"elementTypeToHTMLTemplateMapping":{},"disableUnloadWarn":true,"currencyCode":"","consoleTabTitle":null,"consoleTabLabel":null,"consoleTabIcon":"custom:custom18","cancelType":"SObject","cancelSource":"%ContextId%","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","bLK":false,"autoSaveOnStepNext":false,"autoFocus":false,"allowSaveForLater":false,"allowCancel":false},"prefillJSON":"{}","lwcId":"b35738d5-b0dc-62fc-7823-57481843106e","labelMap":{"OrderSubmissionResults":"ResultsGroup:OrderSubmissionResults","OrderSubmissionCodeFormula":"ResultsGroup:OrderSubmissionCodeFormula","OrderQueuingResult":"ResultsGroup:OrderQueuingResult","DisplayFollowOnErrors":"PreValidateFailure:DisplayFollowOnErrors","FollowOnOrderConfirmation":"PreValidateFailure:FollowOnOrderConfirmation","RedirectToCurrentOrderNavigate":"RedirectToCurrentOrderNavigate","NavigateToAccount":"NavigateToAccount","ResultsGroup":"ResultsGroup","checkout":"checkout","CreateFollowOnOrderDoneNavigate":"CreateFollowOnOrderDoneNavigate","CreateFollowOnOrder":"CreateFollowOnOrder","CreateSupplementalOrder":"CreateSupplementalOrder","PreValidateFailure":"PreValidateFailure","Prevalidate":"Prevalidate"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":null,"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"PreValidate","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"preValidate","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"Prevalidate API Call","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"cartId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"Prevalidate","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"Prevalidate","lwcId":"lwc0"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"true","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"="}],"operator":"OR"}},"saveMessage":null,"saveLabel":null,"remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":null,"nextWidth":3,"nextLabel":"Next","label":"Unable To Pause Order Fulfilment","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":null,"instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":null,"completeLabel":null,"chartLabel":null,"cancelMessage":null,"cancelLabel":null,"allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"PreValidateFailure":"","FollowOnOrderConfirmation":""},"aggElements":{}},"offSet":0,"name":"PreValidateFailure","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Radio","rootIndex":1,"response":null,"propSetMap":{"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"true","condition":"="}],"operator":"AND"}},"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"options":[{"value":"Yes","name":"FollowOnYes","autoAdv":"next"},{"value":"No","name":"FollowOnNo","autoAdv":"next"}],"optionWidth":100,"optionSource":{"type":"","source":""},"optionHeight":100,"label":"Do You Want To Create A Follow On Order?","imageCountInRow":3,"horizontalMode":false,"hide":false,"helpText":"","help":false,"enableCaption":true,"disOnTplt":false,"defaultValue":null,"controllingField":{"type":"","source":"","element":""},"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"FollowOnOrderConfirmation","level":1,"JSONPath":"PreValidateFailure:FollowOnOrderConfirmation","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Text Block","rootIndex":1,"response":null,"propSetMap":{"textKey":"","text":"<p>%OrderFreezeErrorOccurred%</p>\n<p>%PreValidate:messages|1:message%</p>","show":{"group":{"rules":[{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"="},{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="}],"operator":"AND"}},"label":"OrderFreezeErrorOccurred","disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"DisplayFollowOnErrors","level":1,"JSONPath":"PreValidateFailure:DisplayFollowOnErrors","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc11-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"PreValidateFailure","lwcId":"lwc1"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"<>"}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"CreateSupplementalOrder","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"createSupplementalOrder","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"intent":"Cancel","cartId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateSupplementalOrder","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CreateSupplementalOrder","lwcId":"lwc2"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":"Step","svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnYes","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"<>"},{"field":"PreValidate:records|1:isPONR","data":"true","condition":"="}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"CreateFollowOnOrder","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"createFollowOnOrder","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":null,"redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":null,"pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":null,"message":{},"label":null,"inProgressMessage":null,"failureNextLabel":null,"failureGoBackLabel":null,"failureAbortMessage":null,"failureAbortLabel":null,"extraPayload":{"supplementalOrderType":"amend","cartId":"%ContextId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateFollowOnOrder","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"CreateFollowOnOrder","lwcId":"lwc3"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/c__Industries_CPQ/r/%CreateFollowOnOrder:records|1:followOnOrderId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnYes","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"<>"},{"field":"PreValidate:records|1:isPONR","data":"true","condition":"="}],"operator":"AND"}},"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"CreateFollowOnOrderDoneNavigate","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"CreateFollowOnOrderDoneNavigate","lwcId":"lwc4"},{"type":"Remote Action","propSetMap":{"wpm":false,"validationRequired":null,"toastComplete":true,"svgSprite":"","svgIcon":"","ssm":false,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="},{"field":"PreValidate:messages|1:severity","data":"ERROR","condition":"<>"},{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnNo","condition":"<>"}],"operator":"AND"}},"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"checkout","remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"checkout","remoteClass":"vlocity_cmt.CPQAppHandler","redirectTemplateUrl":"vlcAcknowledge.html","redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectPageName":"","redirectNextWidth":3,"redirectNextLabel":"Next","pubsub":false,"preTransformBundle":"","postTransformBundle":"","postMessage":"Done","message":{},"label":"checkout","inProgressMessage":"In Progress","failureNextLabel":"Continue","failureGoBackLabel":"Go Back","failureAbortMessage":"Are you sure?","failureAbortLabel":"Abort","extraPayload":{"skipCheckoutValidation":true,"orderId":"%CreateSupplementalOrder:records|1:supplementalOrderId%","cartId":"%CreateSupplementalOrder:records|1:supplementalOrderId%","ContextId":"%CreateSupplementalOrder:records|1:supplementalOrderId%"},"errorMessage":{"default":null,"custom":[]},"enableDefaultAbort":false,"enableActionMessage":false,"disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"checkout","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"bRemoteAction":true,"JSONPath":"checkout","lwcId":"lwc5"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="}],"operator":"AND"}},"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Order Submission Results","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"ResultsGroup":""},"aggElements":{"OrderSubmissionCodeFormula":""}},"offSet":0,"name":"ResultsGroup","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Headline","rootIndex":6,"response":null,"propSetMap":{"show":null,"sanitize":false,"labelKey":"","label":"<p>%canSubmitOrder:message%</p>","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"OrderQueuingResult","level":1,"JSONPath":"ResultsGroup:OrderQueuingResult","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"lwcId":"lwc60-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Formula","rootIndex":6,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"mask":null,"label":null,"inputWidth":12,"hideGroupSep":false,"hide":true,"expression":"IF(\nEQUALS(%checkout:messages|1:code%,'SUBMIT-1001'),\n\"Order cancellation request was submitted.\",\nIF(\nEQUALS(%checkout:messages|1:code%,'SUBMIT-1002'),\n\"Cancellation request was submitted. Please check the notifications page for future notifications and actions to take.\",\n\"%checkout:messages|1:message%\"\n)\n)","disOnTplt":false,"dateFormat":"MM-dd-yyyy","dataType":"Text","controlWidth":12,"HTMLTemplateId":""},"name":"OrderSubmissionCodeFormula","level":1,"JSONPath":"ResultsGroup:OrderSubmissionCodeFormula","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc61-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Headline","rootIndex":6,"response":null,"propSetMap":{"show":null,"sanitize":false,"labelKey":"","label":"<p>%OrderSubmissionCodeFormula%</p>","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":""},"name":"OrderSubmissionResults","level":1,"JSONPath":"ResultsGroup:OrderSubmissionResults","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"lwcId":"lwc62-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ResultsGroup","lwcId":"lwc6"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/r/Account/%CreateSupplementalOrder:records|1:accountId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"PreValidate:records|1:isPONR","data":"false","condition":"="}],"operator":"AND"}},"replace":true,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"NavigateToAccount","level":0,"indexInParent":7,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateToAccount","lwcId":"lwc7"},{"type":"Navigate Action","propSetMap":{"wpm":false,"variant":"brand","validationRequired":"none","targetUrl":"/lightning/app/c__Industries_CPQ/r/%ContextId%/view","targetType":"Web Page","targetLWCLayout":"lightning","targetId":"%ContextId%","targetFilter":"Recent","ssm":false,"show":{"group":{"rules":[{"field":"PreValidateFailure:FollowOnOrderConfirmation","data":"FollowOnNo","condition":"="}],"operator":"AND"}},"replace":false,"recordAction":"view","pubsub":false,"objectAction":"home","message":{},"loginAction":"login","label":null,"iconVariant":"","iconPosition":"left","iconName":"","disOnTplt":false,"controlWidth":12,"HTMLTemplateId":"","aggElements":{}},"offSet":0,"name":"RedirectToCurrentOrderNavigate","level":0,"indexInParent":8,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"RedirectToCurrentOrderNavigate","lwcId":"lwc8"}],"bReusable":false,"bpVersion":4,"bpType":"LWCCPQ","bpSubType":"CancelOrder","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};