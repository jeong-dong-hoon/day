package com.dh;
import java.io.*;
import java.sql.*;
import java.util.Scanner;
public class Update {
	Connection con;
	PreparedStatement pstm;
	String SQL;
	public Update() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String id = "c##madang";
		String pw = "madang";
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			System.out.println("����̹� �ε强��");
		}
		catch(ClassNotFoundException e) {
			e.printStackTrace();}
		
	
		try {
			System.out.println("����̹� ������");
			con = DriverManager.getConnection(url, id, pw);
			System.out.println("����̹� ���Ӽ���!");
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
	}
	public int sqlinsert() {
		Scanner sc = new Scanner(System.in);
		int r = -1;
		
		String name = sc.next();
		int age = sc.nextInt();
		String gender = sc.next();
			
		try {
		SQL = "insert into id(name,age,gender,codeid) values(?,?,?,id_seq.nextval)";
		pstm = con.prepareStatement(SQL);
		pstm.setString(1,name);
		pstm.setInt(2, age);
		pstm.setString(3, gender);
		
		r = pstm.executeUpdate();
		System.out.println(name+age+gender+"���� �ԷµǾ����ϴ�.");}
		catch(SQLException e) {
			e.printStackTrace();
		}
		return r;
	}
	public static void main(String[] args) {
		Update u = new Update();
		u.sqlinsert();

	}

}
