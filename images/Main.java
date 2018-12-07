/*
	import java.util.Scanner;
	import java.util.Arrays;
	// import java.util.Integer;

	public class Main {
		public static void main(String[] args){
			Scanner sc = new Scanner(System.in);
			String[] Str = sc.nextLine().split(" ");
			int[] num = new int[Str.length];
			for(int i = 0; i < num.length; i++)
				num[i] = Integer.valueOf(Str[i]);

			Arrays.sort(num);
			for(int i = 0; i < num.length; i++) {
				if(i == num.length - 1)
					System.out.println(num[i]);
				else
					System.out.print(num[i] + " ");
			}
		}
	}
*/

/*
abstract class Door {
	public void opendoor(){};
	public void closedoor(){};
}

interface Doors {
	public void threfproof();
    public void waterproof();
    public void fireproof();
}

class GoodDoor extends Door implements Doors {
	public void opendoor() { System.out.println("i can open the door"); }
	public void threfproof() { System.out.println("i can threfproof"); }
    public void waterproof() { System.out.println("i can waterproof"); }
    public void fireproof() { System.out.println("i can fireproof"); }
	public void closedoor() { System.out.println("i can close the door"); }
}

class Main {
    public static void main(String[] args) {
         GoodDoor g=new GoodDoor();
         g.opendoor();
         g.threfproof();
         g.waterproof();
         g.fireproof();
         g.closedoor();
    }
}
*/



/*
class Employee extends Role1 {
    protected int id;
    protected int salary;
    public Employee(){}
    public Employee(String name,int age,String sex,int id,int salary)


class Main{
    public static void main(String[] dsa) {
        Employee e=new Employee("you xiao",20,"Man",1201012204,15000);
        Manager m=new Manager();
        System.out.println(e.id);
        System.out.println(e.salary);
        System.out.println(e.name);
        System.out.println(e.age);
        System.out.println(e.sex);
        System.out.println(m.vehicle);
        m.play();
        m.sing();
    }
}
*/

/*
class Person {
	String name;
	int age;
	Person(String s, int num) {
		name = s;
		age = num;
	}
	public void isValid() throws AgeException {
		if(age < 0)
			throw new AgeException(name + "'s age is invalid!");
		System.out.println(name + "'s age is valid!");
	}
}

class AgeException extends Exception {
	public AgeException()) {
		super();
	}

	public AgeException(String message) {
		super(message);
	}
}
 
class Main{
    public static void main(String[] args){
        Person p1 = new Person("John", 80);
        Person p2=new Person("peter", 210);
        try{p1.isValid();}catch(AgeException e){System.out.println(e.getMessage());}
        try{p2.isValid();}catch(AgeException e){System.out.println(e.getMessage());}
    }
}
*/

/*
import java.util.*;

abstract class Role1 {
	protected String name;
	protected int age;
	protected String sex;
	public void play(){}
}

class Employee extends Role1 {
    public static int id;
    public int salary;
    public Employee(){}
    public Employee(String name, int age, String sex, int id, int salary) {
    	this.name = name;
    	this.age = age;
    	this.sex = sex;
    	Employee.id = id;
    	this.salary = salary;
    }
    public void play() {
    	System.out.println("i can paly");
    }
    public final void sing() {
    	System.out.println("i can sing");
    }
}

class Manager extends Employee {
	public final String vehicle = "Lamborghini";
}

public class demo{
    public static void main(String[] dsa) {
        Employee e = new Employee("you xiao",20,"Man",1201012204,15000);
        Manager m = new Manager();
        System.out.println(e.id);
        System.out.println(e.salary);
        System.out.println(e.name);
        System.out.println(e.age);
        System.out.println(e.sex);
        System.out.println(m.vehicle);
        m.play();
        m.sing();
    }
}

*/




/*
import java.util.Scanner;

public class Main {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int min = 100, max = 0, sum = 0;
		int score[] = new int[10];
		for(int i = 0; i < 10; i++) {
			score[i] = sc.nextInt();
			if(score[i] < min)
				min = score[i];
			if(score[i] > max)
				max = score[i];
			sum += score[i];
		}
		int avg = ( sum - max- min ) / 8;
		System.out.println(avg);
	}
}
*/

/*
import java.util.*;

public class demo {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		String num = sc.nextLine();
		String s[] = num.split("");
		int i = 0;
		int counter[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
		for(; i < s.length; i++) {
			counter[Integer.parseInt(s[i])]++;
		}
		i = 0;
		while(i < 10) {
			System.out.println(i + " counter:" + counter[i++]);
		}
		sc.close();
	}
}


*/


/*
import java.util.*;

public class demo {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();
		String letter[] = s.split(" ");
		int i = 0;
		StringBuffer sb[] = new StringBuffer[letter.length];
		for(; i < letter.length; i++) {
			sb[i] = new StringBuffer(letter[i].length());
			sb[i].append(letter[i]);
			sb[i].reverse();
		}
		i = 0;
		while(i < letter.length) {
			if(i == 0)
				System.out.print(sb[i++]);
			else 
				System.out.print(" " + sb[i++]);
		}
		sc.close();
	}
}

*/






