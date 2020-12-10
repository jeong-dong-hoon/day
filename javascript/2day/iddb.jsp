<%@ page import="java.sql.*" contentType="text/html;charset=UTF-8"%>
<%
 Class.forName("oracle.jdbc.driver.OracleDriver");
 String url="jdbc:oracle:thin:@localhost:1521:xe"; 
 Connection con=DriverManager.getConnection(url, "c##madang", "madang");
 PreparedStatement pstm;
 String SQL = "insert into id(name,age,gender,codeid,pw) values(?,?,?,id_seq.nextval,?)";
 String name = request.getParameter("name");
 String age = request.getParameter("age");
 String gender = request.getParameter("gender");
 String pw = request.getParameter("pw");
 pstm = con.prepareStatement(SQL);
 pstm.setString(1,name);
 pstm.setString(2,age);
pstm.setString(3,gender);
pstm.setString(4,pw);
pstm.executeUpdate();
%>
<html>

<head>
<meta charset="UTF-8">
<meta http-equiv="content-type" content="text/html;" charset="euc-kr">
<title>iddb</title>


</head>

<body>
<div>회원가입이 완료되었습니다.</div>
<button><a href="test.html">돌아가기</a></button>
</body>
</html>