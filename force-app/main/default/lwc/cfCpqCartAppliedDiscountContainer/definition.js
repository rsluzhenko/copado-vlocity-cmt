let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"showAppliedDiscounts\":false,\"asyncJobResponse\":\"none\"}","dsDelay":"","resultVar":""}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1628665599354-yppnx24fm","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"asyncJobResponse","fieldValue":"{action.response}"}],"id":"flex-action-1628665599415","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_update_bulk_async_job_status","element":"action","eventLabel":"pubsub","eventname":"cpq_update_bulk_async_job_status","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartAppliedDiscountContainer_3_Vlocity","Id":"0Rb8Y000000pba50AI","ManageableState":"unmanaged","MasterLabel":"cfCpqCartAppliedDiscountContainer_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqCartAppliedDiscount"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-1","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"draggable":false,"iconColor":"#0176d3","isOpen":true,"key":"1639134543042-g6mrrodvc","label":"Action","record":"{record}","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal_apply_discount","displayName":"{Label.CPQAddNewDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1656593497123","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"utility:add"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","data-conditions":{"group":[{"field":"Parent.view","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"previewCart"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutChannel":"close_modal_apply_discount","flyoutDetails":{"openFlyoutIn":"Modal"},"iconColor":"#0176d3","iconName":"utility:add","iconOnly":true,"iconSize":"x-small","label":"\\{Label.CPQAddNewDiscount}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{"iconColor":"#0176d3","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount","container":{"class":""},"customClass":"cpq__add-new-discount","elementStyleProperties":{"iconColor":"#0176d3","iconSize":"x-small"},"height":"","inlineStyle":"","margin":[],"minHeight":"","padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"conditionString":"asyncJobResponse.isAsyncProcessCompleted == false && asyncJobResponse.isAsyncProcessesPresent > 0","conditions":{"group":[{"field":"asyncJobResponse.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"},{"field":"asyncJobResponse.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-9","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"cpq__add-new-discount__cnd","name":"cpq__add-new-discount__cnd","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{"iconColor":"#0176d3","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-2","name":"Action","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"draggable":true,"iconColor":"#0176d3","isOpen":true,"key":"1639134543042-g6mrrodvc","label":"Action","record":"{record}","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal_apply_discount","displayName":"{Label.CPQAddNewDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1656593484164","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"utility:add"},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","data-conditions":{"group":[{"field":"Parent.view","hasMergeField":false,"id":"state-new-condition-13","operator":"!=","type":"custom","value":"previewCart"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutChannel":"close_modal_apply_discount","flyoutDetails":{"openFlyoutIn":"Modal"},"iconColor":"#0176d3","iconName":"utility:add","iconSize":"x-small","label":"\\{Label.CPQAddNewDiscount}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{"iconColor":"#0176d3","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount","container":{"class":""},"customClass":"cpq__add-new-discount","elementStyleProperties":{"iconColor":"#0176d3","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"conditionString":"asyncJobResponse.isAsyncProcessCompleted == false && asyncJobResponse.isAsyncProcessesPresent > 0","conditions":{"group":[{"field":"asyncJobResponse.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"},{"field":"asyncJobResponse.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-9","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"cpq__add-new-discount__cnd","name":"cpq__add-new-discount__cnd","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{"iconColor":"#0176d3","iconSize":"x-small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-3","name":"Action","property":{"card":"{card}","data-conditions":{"group":[{"field":"showAppliedDiscounts","hasMergeField":false,"id":"state-new-condition-52","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"iconColor":"#747474","iconSize":"x-small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"{Label.CPQAppliedDiscounts}","eventName":"setValues","fieldValues":[{"fieldName":"showAppliedDiscounts","fieldValue":"true"}],"id":"flex-action-1624304286831","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"utility:chevronright"},"stateObj":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#C9C9C9","radius":"","style":"","type":"border_bottom","width":"1"},"class":"slds-text-heading_small blockLabel slds-border_bottom slds-p-around_x-small slds-m-left_x-small ","container":{"class":"slds-text-heading_small blockLabel"},"elementStyleProperties":{"iconColor":"#747474","iconSize":"x-small","styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[{"label":"left:x-small","size":"x-small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #C9C9C9 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#C9C9C9","radius":"","style":"","type":"border_bottom","width":"1"},"class":"slds-text-heading_small blockLabel slds-border_bottom slds-p-around_x-small slds-m-left_x-small ","container":{"class":"slds-text-heading_small blockLabel"},"elementStyleProperties":{"iconColor":"#747474","iconSize":"x-small","styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[{"label":"left:x-small","size":"x-small","type":"left"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #C9C9C9 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-4","name":"FlexCard","property":{"cardName":"cpqCartAppliedDiscount","cardNode":"","data-conditions":{"group":[{"field":"showAppliedDiscounts","hasMergeField":false,"id":"state-new-condition-28","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}","pricelistId":"{Parent.pricelistId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq__cart-applied-disc_container slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card cpq__cart-applied-disc_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartAppliedDiscountContainer","Id":"a5L8Y00001QKqIREAA","vlocity_cmt__GlobalKey__c":"cpqCartAppliedDiscountContainer/Vlocity/3/1650372914237"};
  export default definition