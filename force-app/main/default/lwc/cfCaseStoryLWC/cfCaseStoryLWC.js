import { BaseCard } from "vlocity_cmt/baseCard";                    
import { LightningElement, api, track } from "lwc";                    
import data from "./definition";    
import Salesforce_Metadata from "@salesforce/label/c.Salesforce_Metadata";                

export default class cfCaseStoryLWC extends BaseCard(LightningElement) {                        
    connectedCallback() {                            
        this.setDefinition(data);  
        let label = Salesforce_Metadata;
        console.log(label);                      
    }                    
}