function calendar(year,month,vacation)
{

var today,thisday,nDays,Holiday;

--month;

today = new Date();
thismonth = today.getMonth();
thisday = today.getDate();

if (month == 1) { 
   if ( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ){
      nDays = 29;
   }
   else {
      nDays = 28;
   }
} 
else if ((month == 3)||(month == 5)||(month == 8)||(month == 10)) {
   nDays = 30;
}
else {
   nDays = 31;
}

firstDay = new Date(year,month,1);
startDay = firstDay.getDay();

document.write("<TABLE BORDER=2 BORDERCOLOR=ORANGE CELLSPACING=0 CELLPADDING=1>");
document.write("<TR ALIGN=CENTER><TH COLSPAN=7>西元 " + year + " 年 " + (month+1) + " 月份</TH></TR>");
document.write("<TR ALIGN=CENTER>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#FF0000><B>Sun</B></FONT></TD>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#FFFFFF><B>Mon</B></FONT></TD>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#FFFFFF><B>Tue</B></FONT></TD>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#FFFFFF><B>Wed</B></FONT></TD>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#FFFFFF><B>Thu</B></FONT></TD>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#FFFFFF><B>Fri</B></FONT></TD>");
document.write("<TD width=20><FONT SIZE=2 FACE=ARIAL COLOR=#B3EE3A><B>Sat</B></FONT></TD>");
document.write("<TR ALIGN=CENTER>");

column = 0;
for (i=0; i<startDay; i++) {
   document.write("<TD WIDTH=20></TD>");
   column++;
}

for (i=1; i<=nDays; i++) {
   Holiday=0;

   for (j=0;j<vacation.length;j++) {
      if (i==vacation[j]) Holiday=1;
   }

   if (Holiday==1) {
      document.write("<TD WIDTH=20 BGCOLOR=#63B8FF>");
   }
   else {
      document.write("<TD WIDTH=20>");
   }

   if (month == thismonth && i == thisday) {
      document.write("<FONT SIZE=3 COLOR=YELLOW><B>" + i + "</B>");
   }
   else {
	if (column == 0) document.write("<FONT SIZE=2 COLOR=#FF0000>");
        else if (column == 6) document.write("<FONT SIZE=2 COLOR=#B3EE3A>");
        else document.write("<FONT SIZE=2 COLOR=#FFFFFF>");
   	document.write(i);
   }

   document.write("</FONT></TD>");
   column++;

   if (column == 7) {
   document.write("</TR><TR ALIGN=CENTER>");
   column = 0;
   }
}

document.write("</TABLE><P>");

}