public with sharing class LWC_ContactController{
       
       @AuraEnabled(cacheable = true)
       public static List<Contact> searchContactList(String accountName){
           if (String.isBlank(accountName)) {
                return new List<Contact>();
            }
           
            String key = '%' + accountName + '%';            
            return [SELECT Id, Name, Email FROM Contact WHERE Account.Name LIKE : key LIMIT 3];
       }      
       
}