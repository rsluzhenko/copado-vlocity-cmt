export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"joe.mcmaster@b2c-s1.com","userId":"0058Y00000CbLIwQAH","userCurrencyCode":"USD","timeStamp":"2021-05-04T16:16:43.963Z","sOmniScriptId":"a2j8Y000005rHFCQAA","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"currentLanguage":"en_US","scrollBehavior":"auto","disableUnloadWarn":true,"stepChartPlacement":"right","stylesheet":{"lightningRtl":"","newportRtl":"","lightning":"","newport":""},"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"mergeSavedData":false,"hideStepChart":false,"timeTracking":false,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"modalConfigurationSetting":{"modalSize":"lg","modalController":"ModalProductCtrl","modalHTMLTemplateId":"vlcProductConfig.html"},"itemsKey":"cartItems","id":"vlcCart","responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false},{"modalConfigurationSetting":{"modalSize":"lg","modalController":"","modalHTMLTemplateId":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","dispOutsideOmni":false,"render":false}]},"prefillJSON":"{}","lwcId":"258ab69d-bbac-e8bb-9db7-45196ba79567","labelMap":{"TextBlock1":"Step1:TextBlock1","LineBreak1":"Step1:LineBreak1","Appointments":"Step1:Appointments","Step1":"Step1","GetAppointments":"GetAppointments"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"sendOnlyExtraPayload":true,"businessEvent":"","businessCategory":"","enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[true,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"Step","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{},"responseJSONNode":"AppointmentList","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"Demo_GetAppointments","label":"Get Appointments","controlWidth":12,"aggElements":{}},"offSet":0,"name":"GetAppointments","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"GetAppointments","lwcId":"lwc0"},{"type":"Step","propSetMap":{"businessEvent":"","businessCategory":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"chartLabel":null,"instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[true,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"label":"Step 1","uiElements":{"Step1":""},"aggElements":{"Appointments":""}},"offSet":0,"name":"Step1","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":1,"response":null,"propSetMap":{"customAttributes":[{"source":"%AppointmentList%","name":"appointments"}],"bStandalone":false,"lwcName":"demo_wfm_appointment_booker","hide":false,"conditionType":"Hide if False","show":null,"label":"Appointments","controlWidth":12},"name":"Appointments","level":1,"JSONPath":"Step1:Appointments","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":1,"response":null,"propSetMap":{"HTMLTemplateId":"","show":null,"padding":0,"label":"LineBreak1"},"name":"LineBreak1","level":1,"JSONPath":"Step1:LineBreak1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc11-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Text Block","rootIndex":1,"response":null,"propSetMap":{"sanitize":false,"textKey":"","HTMLTemplateId":"","dataJSON":false,"show":null,"text":"<p>Your Appointment is scheduled for %Appointments:id%.&nbsp; &nbsp; &nbsp;Thank you for choosing Google Fiber</p>\n<p></p>","label":"TextBlock1","controlWidth":12},"name":"TextBlock1","level":1,"JSONPath":"Step1:TextBlock1","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc12-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Step1","lwcId":"lwc1"}],"bReusable":false,"bpVersion":1,"bpType":"Demo","bpSubType":"AppointmentBooker","bpLang":"English","bHasAttachment":false,"lwcVarMap":{"AppointmentList":null}};