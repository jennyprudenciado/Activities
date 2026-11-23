import java.util.*;
public class StudentManagement{
    public static void main (String[]args){
        Scanner input = new Scanner (System.in);
        System.out.println ("======== STUDENT MANAGEMENT SYSTEM ========");

        System.out.println("Name: ");
        String studentName = input.nextLine();
        System.out.println("Program: ");
        String program = input.nextLine();
        System.out.println("Section: ");
        String section = input.nextLine();

        System.out.println("======== GRADES OF STUDENTS ======== ");
        System.out.print("CSElec1: ");
        double csElec = input.nextDouble();

        System.out.print("CS303: ");
        double softEng = input.nextDouble();

        System.out.print("CS302: ");
        double automata = input.nextDouble();

        System.out.print("GE Elec: ");
        double geElec = input.nextDouble();

        System.out.print("CS301: ");
        double progLang = input.nextDouble();

        double ave = (csElec + softEng + automata + geElec + progLang) / 5;
        String remark;

        if (ave >= 90){
            remark ="EXELLENT";
        }
        else if (ave >= 75 ){
            remark = "PASSED";
        } else {
            remark ="FAILED" ;

        }
System.out.println("\n ======== STUDENT RECORD ========");
System.out.println("Student Name:" + studentName);
System.out.println("Program: " + program);
System.out.println("Section: " + section);
System.out.println("CSElec1: " + csElec);
System.out.println("CS303: "+ softEng);
System.out.println("CS302: "+ automata);
System.out.println("GE Elec: " + geElec);
System.out.println("CS301: " + progLang);
System.out.printf("Average: %.2f%n" , ave);
System.out.println("Remark: " + remark);

input.close();
    }
}
