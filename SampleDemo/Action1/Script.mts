'Script editor
 @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf5.xml_;_
Systemutil.CloseProcessByName "iexplore.exe"
Systemutil.Run "http://newtours.demoaut.com/mercurywelcome.php"
Browser("Welcome: Mercury Tours").Sync
If Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Home").Exist(5) Then
	Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Home").Link("REGISTER").Click
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country").Select "TOGO"
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email").Set Datatable("username","Global")
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("password").Set Datatable("password","Global")
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("confirmPassword").Set Datatable("password","Global")
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Image("register").Click
'verify registration is success or not
  If Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebElement("Registration Status message").Exist(4) then
     print "Registration is successful"
     sts_msg=Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebElement("Registration Status message").GetROProperty("innertext")
     Datatable("status","Global")=sts_msg
     Browser("Welcome: Mercury Tours").CloseAllTabs
  Else
     print "Registration is failed"
  End If
Else 
   print "application is not opened"

End If




'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Home").WebEdit("userName").Set "demo" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf1.xml_;_
'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Home").WebEdit("password").SetSecure "5bff6b906b84b8ed2126b9db3b6c" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Home").Image("Sign-In").Click 40,9 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf3.xml_;_
'Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Home").WebElement("HomeFlightsHotelsCar RentalsCr").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebElement("HomeFlightsHotelsCar RentalsCr")_;_script infofile_;_ZIP::ssf4.xml_;_
