let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[],"margin":[{"type":"bottom","size":"x-small","label":"bottom:x-small"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12 ","class":"slds-card slds-m-bottom_x-small ","background":{"color":"","image":"","size":"","repeat":"","position":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"vertical","size":"small","label":"vertical:small"}],"class":"slds-p-vertical_small ","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             ","selectedStyles":"data-block"},"children":[{"key":"element_element_block_0_0_flexToggle_0_0","name":"Toggle","element":"flexToggle","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","card":"{card}","type":"toggle","label":"Automated Payments","name":"Automated Payments","extraclass":"paperless-toggle","styles":{}},"type":"element","styleObject":{"theme":"","background":{"color":"","image":"","size":"","repeat":"","position":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"padding":[],"margin":[],"text":{"align":"","color":"#706D6A"},"height":"","minHeight":"","maxHeight":"","class":"paperless-toggle ","sizeClass":"slds-size_12-of-12 ","container":{"class":"paperless-toggle"},"size":{"isResponsive":false,"default":"12"},"selectedStyles":"","customClass":"","elementStyleProperties":{},"inlineStyle":"","style":"            color:#706D6A; "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Toggle-0"}],"elementLabel":"Block-0"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[],"class":"","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"#fafafa","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"background-color:#fafafa;             "},"children":[{"key":"element_element_block_1_0_outputField_0_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3ENext%20Payment%20Amount%3C/div%3E%0A%3Cdiv%3E%7BStatement.totalBalance%7D%3C/div%3E","card":"{card}","styles":{"label":{"fontSize":"","color":"#706D6A"},"value":{"fontSize":"14px","textDecoration":"bold","color":"#706D6A"}}},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"horizontal","size":"xx-small","label":"horizontal:xx-small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":["border_top","border_bottom"],"width":"1","color":"#cccccc","radius":"","style":""},"elementStyleProperties":{"styles":{"label":{"fontSize":"","color":"#706D6A"},"value":{"fontSize":"14px","textDecoration":"bold","color":"#706D6A"}}},"text":{"align":"","color":""},"inlineStyle":"color: #706D6A;","class":"slds-border_top slds-border_bottom slds-p-vertical_x-small slds-p-horizontal_xx-small ","style":"     border-color:#cccccc; border-width:1px;       color: #706D6A;","selectedStyles":"billing-data"},"parentElementKey":"element_block_1_0","elementLabel":"Block-1-Text-0"},{"key":"element_element_block_1_0_outputField_1_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3ENext%20Payment%20Date%3C/div%3E%0A%3Cdiv%3E%7BStatement.dueDateFormatted%7D%3C/div%3E","card":"{card}","styles":{"label":{"fontSize":"","color":"#706D6A"},"value":{"fontSize":"14px","textDecoration":"bold","color":"#706D6A"}}},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"horizontal","size":"xx-small","label":"horizontal:xx-small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":["border_top","border_bottom"],"width":"1","color":"#cccccc","radius":"","style":""},"elementStyleProperties":{"styles":{"label":{"fontSize":"","color":"#706D6A"},"value":{"fontSize":"14px","textDecoration":"bold","color":"#706D6A"}}},"text":{"align":"","color":""},"inlineStyle":"color: #706D6A;","class":"slds-border_top slds-border_bottom slds-p-vertical_x-small slds-p-horizontal_xx-small ","style":"     border-color:#cccccc; border-width:1px;       color: #706D6A;","selectedStyles":"billing-data"},"parentElementKey":"element_block_1_0","elementLabel":"Block-1-Text-1"},{"key":"element_element_block_1_0_outputField_2_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%3EPayment%20Method%3C/div%3E%0A%3Cdiv%3E%7BBilling.vlocity_cmt__AutoPaymentCardType__c%7D%3C/div%3E","card":"{card}","styles":{"label":{"fontSize":"","color":"#706D6A"},"value":{"fontSize":"14px","textDecoration":"bold","color":"#706D6A"}}},"type":"text","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[{"type":"vertical","size":"x-small","label":"vertical:x-small"},{"type":"horizontal","size":"xx-small","label":"horizontal:xx-small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":["border_top","border_bottom"],"width":"1","color":"#cccccc","radius":"","style":""},"elementStyleProperties":{"styles":{"label":{"fontSize":"","color":"#706D6A"},"value":{"fontSize":"14px","textDecoration":"bold","color":"#706D6A"}}},"text":{"align":"","color":""},"inlineStyle":"color: #706D6A;","class":"slds-border_top slds-border_bottom slds-p-vertical_x-small slds-p-horizontal_xx-small ","style":"     border-color:#cccccc; border-width:1px;       color: #706D6A;","selectedStyles":"billing-data"},"parentElementKey":"element_block_1_0","elementLabel":"Block-1-Text-2"}],"elementLabel":"Block-1"},{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[],"class":"","sizeClass":"slds-size_12-of-12 ","margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","style":"             "},"children":[{"name":"Action","element":"action","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"stateObj":"{record}","card":"{card}","record":"{record}","stateAction":{"id":"flex-action-1621863405549","type":"Custom","displayName":"Schedule a Payment","vlocityIcon":"utility:date_time","targetType":"Web Page","openUrlIn":"Current Window","Web Page":{"targetName":"/apex"}},"displayAsButton":true,"styles":{"label":{"textAlign":"center","fontSize":"","color":"#666"}},"iconColor":"#666","iconSize":"x-small"},"type":"element","styleObject":{"sizeClass":"slds-size_12-of-12 ","padding":[],"margin":[{"type":"vertical","size":"large","label":"vertical:large"}],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":"","width":"1","color":"#cbcbcb","radius":"5px","style":""},"elementStyleProperties":{"styles":{"label":{"textAlign":"center","fontSize":"","color":"#666"}},"iconColor":"#666","iconSize":"x-small"},"text":{"align":"","color":""},"inlineStyle":"border: 1px solid #CBCBCB;\n","class":"slds-m-vertical_large ","style":"     border-color:#cbcbcb; border-width:1px; border-radius:5px;      border: 1px solid #CBCBCB;\n"},"elementLabel":"Block-1-Block-3-Action-0","key":"element_element_block_2_0_action_0_0","parentElementKey":"element_block_2_0"}],"elementLabel":"Block-1-Block-3"}]}},"childCards":[],"actions":[],"omniscripts":[],"documents":[]}],"dataSource":{"type":"Custom","value":{"dsDelay":0,"body":"{\n  \"Billing\": {\n    \"vlocity_cmt__AutoPaymentCardType__c\": \"VISA\",\n    \"EnableAutopay\": true,\n    \"AccountName\": \"Rachel Molina Residence\",\n    \"BillingStreet\": \"3205 N 3rd St\",\n    \"BillingState\": \"IA\",\n    \"BillingPostalCode\": \"50322\",\n    \"BillingCountry\": \"USA\",\n    \"BillingCity\": \"Clinton\"\n  },\n  \"Statement\": {\n    \"statementName\": \"Billing Cycle - 4/1/2021\",\n    \"accountId\": \"0018Y00002tfzxaQAM\",\n    \"endDate\": \"2021-03-31\",\n    \"dueDateFormatted\": \"05/01/2021\",\n    \"totalBalance\": \"$108.68\",\n    \"previousBalance\": \"$0.00\",\n    \"currentBalance\": \"$108.68\",\n    \"endDateFormatted\": \"03/31/2021\",\n    \"id\": \"a4V8Y000001M2kXUAA\",\n    \"startDateFormatted\": \"03/02/2021\"\n  }\n}","resultVar":""},"orderBy":{"name":"","isReverse":false},"contextVariables":[]},"title":"demoAccountActionsAccountBilling","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfDemoAccountActionsAccountBilling_3_sfi","Id":"0Rb8Y000000pbXGSA4","MasterLabel":"cfDemoAccountActionsAccountBilling_3_sfi","NamespacePrefix":"c"},"globalCSS":true,"osSupport":true,"isRepeatable":true,"Id":"a5L8Y00001QKqEiEAO","vlocity_cmt__GlobalKey__c":"demoAccountActionsAccountBilling/sfi/3/1622235939457","vlocity_cmt__IsChildCard__c":false};
  export default definition