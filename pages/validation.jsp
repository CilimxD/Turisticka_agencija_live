<%-- 
    Document   : validation
    Created on : Jun 5, 2019, 12:11:29 AM
    Author     : PC
--%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<link href="../main.css" rel="stylesheet" type="text/css">


<div><c:import url="header.jsp"/></div>
<c:set value="${param.username}" var="users" />
<c:set value="${param.password}" var="pass" />
<sql:query scope="application" dataSource="${db}" var="sve">
    SELECT logovanje.*,korisnici.kor_admin FROM logovanje
    INNER JOIN korisnici ON logovanje.log_id = korisnici.log_id 
    WHERE log_username = "${users}" AND logovanje.log_password = "${pass}" 
</sql:query>
<c:choose >
    <c:when test="${sve.rowCount == 0}">
        <div class='container naslov'>
            <div style ='font-weight: 900;'>
                <h2 style ='color: red;'>
                    Neuspesno logovanje,Molim vas proverite username i password!!
                </h2>
            </div> 
            <%
            response.setHeader("Refresh", "2;url=../index.jsp");
            %>
        </div>
    </c:when>
    <c:when test="${sve.rowCount != 0}">
        <c:forEach items="${sve.rows}" var="rez">
            <c:set value="${rez.log_id}" var="userId" scope="session" />
            <c:set value="${rez.log_username}" var="username" scope="session" />
            <c:set value="${rez.kor_admin}" var="admin" scope="session" />
        </c:forEach>
        <div class='container naslov'>
            <div style ='font-weight: 900;'>
                <h2 style ='color: green;'>
                    Uspesno logovanje!!
                </h2>
            </div> 
            <%
            response.setHeader("Refresh", "2;url=../index.jsp");
            %>
        </div>
    </c:when>
</c:choose>
<%
    
//    String users = request.getParameter("username");
//    String pass = request.getParameter("password");
//    
//    boolean login = false;
//
//    Connection con = null;
//    Statement stmt = null;
//    ResultSet rs = null;
//
//    try{
//    con = Connect.getConnection();
//   
//    stmt = con.createStatement();
//    rs = stmt.executeQuery("SELECT * from logovanje WHERE log_username = '" + users + 
//            "' AND log_password = '" + pass + "'");
//
//    
//    while(rs.next()){
//    
//    
//    login = true;
//
//    if (login) {
//        out.print("<div class='container naslov'>");
//        out.print("<div style ='font-weight: 900;'>");
//        out.print("<h2 style ='color: green;'>");
//        out.println("Uspesno logovanje");
//        out.print("</h2>");
//        out.print("</div>");
//        response.setHeader("Refresh", "5;url=../index.jsp"); 
//        String ime =rs.getString("log_username");
//        int  id = rs.getInt(1);
//        session.setAttribute("username", ime);
//        session.setAttribute("userId", id);
//        out.print("</div>");
//    }
//                  
//    
//    }   if(login == false){
//        out.print("<div class='container naslov'>");
//        out.print("<div style ='font-weight: 900;'>");
//        out.print("<h2 style ='color: red;'>");
//        out.println("Neuspesno logovanje,Molim vas proverite username i password");
//        out.print("</h2>");
//        out.print("</div>");
//        response.setHeader("Refresh", "5;url=login.jsp");
//        out.print("</div>");
//    }
//    }
//    catch(Exception e){
//       e.printStackTrace();
//    }

%>
<div class="raw foot"><c:import url="footer.jsp"/></div>