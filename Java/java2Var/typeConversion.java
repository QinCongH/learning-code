package java2Var;

public class typeConversion {
 public static void main(String[] args) {
     //1.自动类型转换
     double d=10;
     System.out.println(d); //输出10.0  自动转换
    byte b=10;
    short s=b;
    System.out.println(s); 
    // char不会自动转换为char
    // 2.强制类型转换
    int k=(int)88.88;
    System.out.println(k);//输出88，此时出现数据丢失，一般不建议使用强制类型转换
 }   
}
