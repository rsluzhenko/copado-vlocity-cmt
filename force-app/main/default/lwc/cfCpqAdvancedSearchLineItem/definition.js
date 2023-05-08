let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\n      \"operator\": \"equals\",\n      \"options\": [\n        {\n          \"value\": \"equals\",\n          \"label\": \"Equals\"\n        }\n      ],\n      \"pickListValues\": [],\n      \"type\": \"currency\",\n      \"fieldName\": \"vlocity_cmt__RecurringCharge__c\",\n      \"fieldAPIName\": \"vlocity_cmt__RecurringCharge__c\",\n      \"fieldLabel\": \"Recurring Charge\",\n      \"objectName\": \"Asset\",\n      \"objectAPIName\": \"Asset\",\n      \"displaySequence\": 1\n    }","dsDelay":0,"resultVar":""}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1627486472937-4f3l6zt48","label":"Action","stateAction":{"eventName":"cpqutils","extraParams":{"changeType":"value","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{action.index}","offerType":"Assets","type":"{action.datatype}","utilMethod":"advancedSearchChangeValue","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1622125860279","message":"cpq_ui_event","subType":"PubSub","type":"Event"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1629384631927-b2ye92rrr","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"changeType":"value","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{action.index}","offerType":"Assets","type":"{action.datatype}","utilMethod":"advancedSearchChangeValue","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1627486479283","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpqAdvancedSearchInput_{recordId}","displayLabel":"cpqAdvancedSearchInput_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1627486472937-95so6fjba","label":"Action","stateAction":{"eventName":"cpqutils","extraParams":{"changeType":"operator","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{action.index}","offerType":"Assets","type":"{action.datatype}","utilMethod":"advancedSearchChangeValue","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1622125869202","message":"cpq_ui_event","subType":"PubSub","type":"Event"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1629384631927-7b6hh0hdl","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"changeType":"operator","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{action.index}","offerType":"Assets","type":"{action.datatype}","utilMethod":"advancedSearchChangeValue","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1627486496978","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpqAdvancedSearchOperator_{recordId}","displayLabel":"cpqAdvancedSearchOperator_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1627486472937-5a7rc8x6p","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.filters","fieldValue":"{action.filters}"}],"id":"flex-action-1621848071543","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1629384631927-zaqfruast","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.filters","fieldValue":"{action.filters}"}],"id":"flex-action-1621848071543","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:assets_search_change_value","element":"action","eventLabel":"pubsub","eventname":"assets_search_change_value","eventtype":"pubsub","key":"event-2","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1627486472937-tgax7u0xb","label":"Action","stateAction":{"eventName":"cpqutils","extraParams":{"changeType":"fieldName","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{action.index}","offerType":"Assets","type":"{action.datatype}","utilMethod":"advancedSearchChangeValue","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1622125877831","message":"cpq_ui_event","subType":"PubSub","type":"Event"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1629384631927-cwu3s20le","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"changeType":"fieldName","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{action.index}","offerType":"Assets","type":"{action.datatype}","utilMethod":"advancedSearchChangeValue","value":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1627486510362","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpqAdvancedSearchFieldSelect_{recordId}","displayLabel":"cpqAdvancedSearchFieldSelect_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-3","recordIndex":"0"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqAdvancedSearchLineItem_2_Vlocity","Id":"0RbDp000000JqylCAA","ManageableState":"unmanaged","MasterLabel":"cfCpqAdvancedSearchLineItem_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"ComboBox-0","name":"ComboBox","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"options","value":"{Parent.fields}"},{"id":2,"label":"data-index","value":"{index}"},{"id":3,"label":"name","value":"cpqAdvancedSearchFieldSelect_{recordId}"}],"label":" ","name":"cpqAdvancedSearchFieldSelect","required":"","type":"combobox","value":"{fieldName}"},"record":"{record}","type":"combobox"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 "},"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"ComboBox-1","name":"ComboBox","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"options","value":"{options}"},{"id":3,"label":"data-index","value":"{index}"},{"id":2,"label":"data-datatype","value":"{type}"},{"id":4,"label":"name","value":"cpqAdvancedSearchOperator_{recordId}"}],"label":" ","name":"cpqAdvancedSearchOperator","type":"combobox","value":"{operator}"},"record":"{record}","type":"combobox"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_x-small slds-p-right_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:x-small","size":"x-small","type":"left"},{"label":"right:x-small","size":"x-small","type":"right"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_x-small slds-p-right_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:x-small","size":"x-small","type":"left"},{"label":"right:x-small","size":"x-small","type":"right"}],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Date-2","name":"Date","property":{"card":"{card}","data-conditions":{"group":[{"field":"type","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"date"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"data-index","value":"{index}"},{"id":1,"label":"data-datatype","value":"{type}"},{"id":2,"label":"name","value":"cpqAdvancedSearchInput_{recordId}"}],"format":"MM-DD-YYYY","label":" ","name":"cpqAdvancedSearchInput","outputFormat":"MM-DD-YYYY","value":"{value}"},"record":"{record}","type":"date"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"DateTime-3","name":"DateTime","property":{"card":"{card}","data-conditions":{"group":[{"field":"type","hasMergeField":false,"id":"state-new-condition-14","operator":"==","type":"custom","value":"datetime"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"data-index","value":"{index}"},{"id":1,"label":"data-datatype","value":"{type}"},{"id":2,"label":"name","value":"cpqAdvancedSearchInput_{recordId}"}],"dateLabel":" ","label":" ","name":"cpqAdvancedSearchInput","timeLabel":" ","value":"{value}"},"record":"{record}","type":"datetime"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Number-4","name":"Number","property":{"card":"{card}","data-conditions":{"group":[{"field":"type","hasMergeField":false,"id":"state-new-condition-23","operator":"==","type":"custom","value":"double"},{"field":"type","hasMergeField":false,"id":"state-new-condition-30","logicalOperator":"||","operator":"==","type":"custom","value":"int"},{"field":"type","hasMergeField":false,"id":"state-new-condition-43","logicalOperator":"||","operator":"==","type":"custom","value":"percent"},{"field":"type","hasMergeField":false,"id":"state-new-condition-56","logicalOperator":"||","operator":"==","type":"custom","value":"currency"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"data-index","value":"{index}"},{"id":1,"label":"data-datatype","value":"{type}"},{"id":3,"label":"name","value":"cpqAdvancedSearchInput_{recordId}"}],"label":" ","name":"cpqAdvancedSearchInput","value":"{value}"},"record":"{record}","type":"number"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"ComboBox-5","name":"ComboBox","property":{"card":"{card}","data-conditions":{"group":[{"field":"type","hasMergeField":false,"id":"state-new-condition-72","operator":"==","type":"custom","value":"boolean"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"options","value":"[   {     \"value\": \"true\",     \"label\": \"true\"   },   {     \"value\": \"false\",     \"label\": \"false\"   } ]"},{"id":1,"label":"data-index","value":"{index}"},{"id":2,"label":"data-datatype","value":"{type}"},{"id":4,"label":"name","value":"cpqAdvancedSearchInput_{recordId}"}],"label":" ","name":"cpqAdvancedSearchInput","type":"combobox","value":"{value}"},"record":"{record}","type":"combobox"},"size":{"default":4,"isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":4,"isResponsive":false},"sizeClass":"slds-size_4-of-12"},"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"ComboBox-6","name":"ComboBox","property":{"card":"{card}","data-conditions":{"group":[{"field":"type","hasMergeField":false,"id":"state-new-condition-79","operator":"==","type":"custom","value":"picklist"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":0,"label":"options","value":"{pickListValues}"},{"id":1,"label":"data-index","value":"{index}"},{"id":2,"label":"data-datatype","value":"{type}"},{"id":4,"label":"name","value":"cpqAdvancedSearchInput_{recordId}"}],"label":" ","name":"cpqAdvancedSearchInput","type":"combobox","value":"{value}"},"record":"{record}","type":"combobox"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Text-7","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"type","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"string"}],"id":"state-condition-object","isParent":true},"propertyObj":{"customProperties":[{"id":2,"label":"data-index","value":"{index}"},{"id":1,"label":"data-datatype","value":"{type}"},{"id":3,"label":"name","value":"cpqAdvancedSearchInput_{recordId}"}],"label":" ","name":"cpqAdvancedSearchInput","placeholder":"","value":"{value}"},"record":"{record}","type":"text"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 "},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Action-8","name":"Action","property":{"card":"{card}","iconColor":"#B0ADAB","iconSize":"small","record":"{record}","stateAction":{"displayName":" ","eventName":"cpqutils_{recordId}","extraParams":{"changeType":"remove","changeValueEventName":"assets_search_change_value","fields":"{Parent.fields}","filters":"{Parent.filters}","index":"{index}","offerType":"Assets","utilMethod":"advancedSearchChangeValue"},"hasExtraParams":true,"id":"flex-action-1626923414674","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"utility:close"},"stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_xx-small ","container":{"class":""},"elementStyleProperties":{"iconColor":"#B0ADAB","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_xx-small ","container":{"class":""},"elementStyleProperties":{"iconColor":"#B0ADAB","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqAdvancedSearchLineItem","Id":"a3gDp000001HVKRQAC","vlocity_cmt__GlobalKey__c":"cpqAdvancedSearchLineItem/Vlocity/2/1626753545891"};
  export default definition