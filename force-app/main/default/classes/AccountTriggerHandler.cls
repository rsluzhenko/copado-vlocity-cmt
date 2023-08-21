public with sharing class AccountTriggerHandler {
    public AccountTriggerHandler(Account record) {
        System.debug('This is my account trigger handler 5: ' + record.Name);
    }
}