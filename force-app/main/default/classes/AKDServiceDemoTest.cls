@isTest(seeAllData=false)
private class AKDServiceDemoTest {
    static testMethod void testActiveMethod(){
        AKDServiceDemo test1Hello = new AKDServiceDemo();
        System.debug('source partial rollback part 1');
    }
}