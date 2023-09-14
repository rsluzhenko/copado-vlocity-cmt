let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[{"id":"state-condition-0","field":"category","operator":"==","value":"order","type":"custom"},{"id":"state-condition-1","field":"orderId","operator":"!=","value":"\"\"","type":"custom","logicalOperator":"&&"}]},"definedActions":{"actions":[]},"name":"Order","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"bottom","size":"x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"FlexCard","element":"childCardPreview","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"cardName":"demoConsoleOrderDetails","recordId":"{recordId}","cardNode":"","selectedState":"Active","isChildCardTrackingEnabled":false,"parentAttribute":{"Id":"{orderId}"}},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"FlexCard-0"},{"name":"FlexCard","element":"childCardPreview","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"cardName":"demoConsoleOrderDetailsLineItems","recordId":"{recordId}","cardNode":"","selectedState":"Active","isChildCardTrackingEnabled":false,"parentAttribute":{"Id":"{orderId}"}},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"FlexCard-1"}]}},"childCards":["demoConsoleOrderDetails","demoConsoleOrderDetailsLineItems"],"actions":[],"omniscripts":[]},{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"name":"Empty","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"bottom","size":"x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"blankCardState":true,"components":{"layer-0":{"children":[{"name":"Custom LWC","element":"customLwc","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"customlwcname":"demoConsoleEmpty"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12"},"elementLabel":"Custom LWC-0"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-heading_large%20slds-text-align_center%22%3ESelect%20Something...%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666"},"inlineStyle":"","class":"","style":"            color:#666; "},"elementLabel":"Text-1"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":1,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3EPlease%20select%20an%20object%20to%20the%20left%20to%20see%20additional%20details.%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666"},"inlineStyle":"","class":"","style":"            color:#666; "},"elementLabel":"Text-2"}]}},"childCards":[],"actions":[],"omniscripts":[]}],"dataSource":{"type":"Custom","value":{"body":"{\"category\":\"\",\"orderId\":\"\"}"},"orderBy":{"name":"","isReverse":false},"contextVariables":[]},"title":"demoConsoleOrder","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfDemoConsoleOrder_1_sfi","Id":"0Rb8Y000000pbXDSAW","MasterLabel":"cfDemoConsoleOrder_1_sfi","NamespacePrefix":"c"},"events":[{"eventname":"setvalues","channelname":"CiConsoleMC","element":"action","eventtype":"pubsub","recordIndex":"0","actionData":{"card":"{card}","stateAction":{"id":"flex-action-1624736509228","type":"cardAction","eventName":"setValues","fieldValues":[{"fieldName":"orderId","fieldValue":"{action.id}"},{"fieldName":"category","fieldValue":"{action.category}"}]}},"key":"event-0","displayLabel":"CiConsoleMC:setvalues","eventLabel":"pubsub"}],"tracking":{"businessCategory":""},"Id":"a5L8Y00001QKqNqEAE","vlocity_cmt__GlobalKey__c":"demoConsoleOrder/sfi/1/1624736243743","vlocity_cmt__IsChildCard__c":false};
  export default definition