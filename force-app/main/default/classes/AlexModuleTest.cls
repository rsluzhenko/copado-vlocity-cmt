@IsTest
private class AlexModuleTest {
	@IsTest
    static void doSomething(){
        Test.startTest();
        String result = new AlexModule().doSomething();
        Test.stopTest();
        
        System.assertEquals('OK', result);
    }
}