public class VlocityDeploy {
    
    public static void execute() {
       Account ac = [Select id, name from Account LIMIT 1 ];
        ac.Name = 'Test Acc';
        update ac;
    }

}