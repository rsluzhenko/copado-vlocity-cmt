let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":0,"inputMap":{"cartId":"{Parent.cartId}"},"ipMethod":"CPQ_GetPromotionsAppliedToCart","resultVar":"[\"response\"]","vlocityAsync":false}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1638931795881-zczhwfzbs","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"reload","id":"flex-action-1638931795918","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_ui_event_{recordId}_{Parent.view}","displayLabel":"cpq_ui_event_{recordId}_{Parent.view}:cpq_update_cart_promotion_list","element":"action","eventLabel":"pubsub","eventname":"cpq_update_cart_promotion_list","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartAppliedPromotion_5_Vlocity","Id":"0Rb8Y000000pbZOCAS","ManageableState":"unmanaged","MasterLabel":"cfCpqCartAppliedPromotion_5_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqCartPromotion"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-0-FlexCard-0","key":"element_element_block_0_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqCartPromotion","cardNode":"{record.records}","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQAppliedPromotions} ({totalSize})","record":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promotions_block slds-p-around_x-small ","container":{"class":"cpq__cart-applied-promotions_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promotions_block slds-p-around_x-small ","container":{"class":"cpq__cart-applied-promotions_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"totalSize","id":"state-condition-0","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq__cart-applied-promo_container slds-m-around_none ","container":{"class":"slds-card cpq__cart-applied-promo_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","key":"element_element_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","mergeField":"%3Ch4%20class=%22slds-text-heading_medium%22%3E%3Cspan%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQNoAppliedPromotionsEmptyText%7D%3C/span%3E%3C/h4%3E%0A%3Ch4%3E%3Cspan%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQNoAppliedDiscMissingOut%7D%3C/span%3E%3C/h4%3E%0A%3Cp%3E%3Cspan%20class=%22slds-text-body_regular%22%20style=%22color:%20#3e3e3c;%22%3E%7BLabel.CPQNoAppliedPromotionText%7D%3C/span%3E%3C/p%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small cpq__cart-applied-promotions_empty-text","container":{"class":""},"customClass":"cpq__cart-applied-promotions_empty-text","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small cpq__cart-applied-promotions_empty-text","container":{"class":""},"customClass":"cpq__cart-applied-promotions_empty-text","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQAppliedPromotions} (0)","record":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promotions_block slds-p-around_x-small ","container":{"class":"cpq__cart-applied-promotions_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promotions_block slds-p-around_x-small ","container":{"class":"cpq__cart-applied-promotions_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"records.totalSize","hasMergeField":false,"id":"state-condition-0","operator":"<=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Empty State","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq__cart-applied-promo_container slds-m-around_none ","container":{"class":"slds-card cpq__cart-applied-promo_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartAppliedPromotion","Id":"a5L8Y00001QKqIAEAQ","vlocity_cmt__GlobalKey__c":"cpqCartAppliedPromotion/Vlocity/5/1652178773498"};
  export default definition