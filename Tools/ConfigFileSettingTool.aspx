<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConfigFileSettingTool.aspx.cs" Inherits="Tools_ConfigFileSettingTool" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:Label ID="Label1" runat="server" Text="ConfigFile Name:"></asp:Label>
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <br/>
        <!--To DO: Generate several TextBoxes stander for each room-->
        <asp:Button ID="btnGenerate" runat="server" Text="Generate" 
            onclick="btnGenerate_Click" />
    </div>
    </form>
</body>
</html>
