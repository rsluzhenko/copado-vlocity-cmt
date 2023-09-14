let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[],"margin":[{"type":"around","size":"none","label":"around:none"}],"container":{"class":""},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12 ","class":"slds-m-around_none ","background":{"color":"","image":"","size":"","repeat":"","position":""},"border":{"type":"","width":"","color":"","radius":"","style":"none"},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"background-color: transparent;","style":"        border-style:none;     background-color: transparent;"},"components":{"layer-0":{"children":[{"name":"Image","element":"flexImg","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","size":"","extraclass":"image-fade-down","stateImg":{"imgsrc":"https://maps.googleapis.com/maps/api/staticmap?center={CalculatedAddress}&zoom=13&scale=1&size=400x150&maptype=roadmap&key=AIzaSyARD3txQownmDguP8QUI8Ntcc7AM1LofF8&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C{CalculatedAddress}","alternativeText":"Image description"}},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","customClass":"gradient","class":"gradient","style":"             "},"elementLabel":"Image-0"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[],"class":"","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"children":[{"name":"FlexCard","element":"childCardPreview","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"cardName":"demoConsoleLeftAccountContact","recordId":"{recordId}","cardNode":"","selectedState":"Active","isChildCardTrackingEnabled":false,"parentAttribute":{"ContactId":"{vlocity_cmt__PrimaryContactId__c}"}},"type":"element","styleObject":{"padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"right","size":"x-small","label":"right:x-small"},{"type":"left","size":"medium","label":"left:medium"}],"class":"slds-p-vertical_x-small slds-p-right_x-small slds-p-left_medium ","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             ","selectedStyles":"data-block"},"elementLabel":"Block-1-FlexCard-0","key":"element_element_block_1_0_childCardPreview_0_0","parentElementKey":"element_block_1_0"}],"elementLabel":"Block-1"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"right","size":"x-small","label":"right:x-small"},{"type":"left","size":"medium","label":"left:medium"}],"class":"slds-p-vertical_x-small slds-p-right_x-small slds-p-left_medium ","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             ","selectedStyles":"data-block"},"children":[{"key":"element_element_block_2_0_outputField_1_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3EAccount%20Name:%20%7BAccountName%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666666"},"inlineStyle":"","class":"","style":"            color:#666666; "},"parentElementKey":"element_block_2_0","elementLabel":"Block-1-Text-1"},{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3EAccount%20Number:%20%7BAccountNumber%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666666"},"inlineStyle":"","class":"","style":"            color:#666666; "},"elementLabel":"Block-1-Text-2","key":"element_element_block_2_0_outputField_2_0","parentElementKey":"element_block_2_0"},{"key":"element_element_block_2_0_outputField_3_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3EAccount%20Type:%20%7BAccountType%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666666"},"inlineStyle":"","class":"","style":"            color:#666666; "},"parentElementKey":"element_block_2_0","elementLabel":"Block-1-Text-3"}],"elementLabel":"Block-2"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"left","size":"medium","label":"left:medium"},{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"right","size":"x-small","label":"right:x-small"}],"class":"slds-p-left_medium slds-p-vertical_x-small slds-p-right_x-small ","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"children":[{"name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3ESLA:%20%7Bvlocity_cmt__SLA__c%7D%3C/div%3E%0A%3Cdiv%3EStatus:%20%7BAccountStatus%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666666"},"inlineStyle":"","class":"","style":"            color:#666666; "},"elementLabel":"Block-2-Block-1-Text-0","key":"element_element_block_2_0_outputField_0_0","parentElementKey":"element_block_2_0"}],"elementLabel":"Block-3"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"left","size":"medium","label":"left:medium"},{"type":"right","size":"x-small","label":"right:x-small"}],"class":"slds-p-vertical_x-small slds-p-left_medium slds-p-right_x-small ","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"children":[{"key":"element_element_block_2_0_outputField_0_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3E%7BAccountStreet%7D%3C/div%3E%0A%3Cdiv%3E%7BAccountCity%7D%20%7BAccountState%7D%20%7BAccountPostalCode%7D%3C/div%3E%0A%3Cdiv%3E%7BPhone%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":"#666666"},"inlineStyle":"","class":"","style":"            color:#666666; "},"parentElementKey":"element_block_2_0","elementLabel":"Block-2-Text-0"}],"elementLabel":"Block-4"}]}},"childCards":["demoConsoleLeftAccountContact"],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"Account_AccountDetails","vlocityAsync":false,"inputMap":{"AccountId":"{recordId}"},"resultVar":""},"orderBy":{"name":"","isReverse":false},"contextVariables":[]},"title":"demoConsoleLeftAccountCard","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfDemoConsoleLeftAccountCard_3_DE","Id":"0Rb8Y000000pbXPSAW","MasterLabel":"cfDemoConsoleLeftAccountCard_3_DE","NamespacePrefix":"c"},"globalCSS":true,"Id":"a5L8Y00001QKqNvEAE","vlocity_cmt__GlobalKey__c":"demoConsoleLeftAccountCard/DE/3/1625591975579","vlocity_cmt__IsChildCard__c":true};
  export default definition