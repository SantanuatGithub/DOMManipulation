import { LightningElement, track, wire } from 'lwc';
import searchContactList from '@salesforce/apex/LWC_ContactController.searchContactList';

const DELAY = 300;

export default class ShowContactsPanel extends LightningElement {
    @track searchKey = 'Edg';
    @track recId;
     
    @wire(searchContactList, {accountName:'$searchKey'}) contacts;

    
    searchContact(event){  
        event.preventDefault();        
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
 
    manipulateDOM(event){
        event.preventDefault(); 
        
        //Read Header from lightning-card
        //console.log('Lightning Card Header-->'+this.template.querySelector('lightning-card').title);
        //console.log('Lightning Card Header-->'+this.template.querySelector('.main').title);
        
        //Change title
        //this.template.querySelector('.main').title = "Learning DOM Manipulation in Lightning Web Component";

        //get text content 
        //console.log('Content-->'+this.template.querySelector('.main').textContent);

        //Change content color of the lightning-card
        //this.template.querySelector('.main').style.color='green';

        //add same style from CSS file
        //this.template.querySelector('.main').classList.add('panelHeader');

        //get the contacts sequentially
        //let contactList = this.template.querySelectorAll('.conName');
        //console.log('Contact 1-->'+contactList[0].textContent);
        //console.log('Contact 2-->'+contactList[1].textContent);

        //get the length of the list
        //console.log('ConList-->'+contactList.length);
        
        //change the color of last element
        //contactList[contactList.length-1].style.color='red';

        //get first item
        //let firstItem = this.template.querySelector('.conName:first-child');
        //console.log('firstChild-->'+firstItem.textContent);

        //get last item
        //let lastItem = this.template.querySelector('.conName:last-child');
        //console.log('lastChild-->'+lastItem.textContent);
        
        //get nth Item
        //let nthConItem = this.template.querySelector('.conName:nth-child(2)');
        //console.log('nthItem-->'+nthConItem.textContent);

        //Stripped Table by DOM Execution
        /*let contactOddList = this.template.querySelectorAll('.conName:nth-child(odd)');
        let contactEvenList = this.template.querySelectorAll('.conName:nth-child(even)');
        
        for(let i = 0; i < contactOddList.length; i++){
            contactOddList[i].style.backgroundColor = '#D5DBDB';
            contactEvenList[i].style.backgroundColor = '#BDC3C7';
        }*/

        //get the parent node
        //let contempList = this.template.querySelector('.contempList'); 
        //console.log('parent node-->'+contempList.parentNode);

        //get the parent node content
        //console.log('parent node-->'+contempList.parentNode.textcontent);

        //change the color of parent node
        //contempList.parentNode.style.color="red";

        //get the child node
        //let parentContempList = this.template.querySelector('.parentContempList'); 
        //console.log('child node-->'+parentContempList.children[0]);

        //get the child node content
        //console.log('child node-->'+parentContempList.children[0].textContent);

       
        //change the color of child nodes
        //parentContempList.children[0].style.color="green";
        //parentContempList.children[1].style.color="red";

        //set the child node contents
        //parentContempList.firstElementChild.textContent = "Displaying Data";
        //parentContempList.lastElementChild.textContent = "Transferred Rows";

        //get attribute at certain level
        let contactList = this.template.querySelectorAll('.conName');
        for(let k = 0; k<contactList.length; k++){
            console.log(contactList[k].getAttribute('id'));
        }
    }

   

     toggleRow(event){

        event.preventDefault();

        this.recId = event.target.dataset.id;
        
        //get the attribute of DOM element using wild characters
        //let currentElement = this.template.querySelector("[id^='" + this.recId + "']");
        //console.log('currentElement-->'+currentElement.textContent);

        
        this.recId = event.target.dataset.id;
        let conList = this.template.querySelectorAll('.conli');

        let btnList = this.template.querySelectorAll('.btn');

        for (let j = 0; j < btnList.length; j++){
            btnList[j].iconName = "utility:chevronright";
        }

        
        for (let i = 0; i < conList.length; i++){
            let indvRow = conList[i];
            let indvRowId = conList[i].getAttribute('id');  
            
            if(indvRowId.includes(this.recId)) {
                if(indvRow.classList.contains("slds-show")){
                    indvRow.classList.add("slds-hide");
                    indvRow.classList.remove("slds-show");
                    event.target.iconName = "utility:chevronright";
                }
                else{
                    indvRow.classList.remove("slds-hide");
                    indvRow.classList.add("slds-show");
                    event.target.iconName = "utility:chevrondown";
                }
            }
            else{
                indvRow.classList.add("slds-hide");
                indvRow.classList.remove("slds-show");
            }
        }
    }    
}