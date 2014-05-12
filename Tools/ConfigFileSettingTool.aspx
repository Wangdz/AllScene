<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ConfigFileSettingTool.aspx.cs" Inherits="Tools_ConfigFileSettingTool" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Configing Step 1</title>
<style>
body
{
    background:Black;
    }
.floatRight
{   
    position: absolute;
    right: 0px;        
}
.marginAuto
{
    position:relative;
    margin:auto;
}
</style>
</head>
<body>
    <form id="form1" runat="server">
    <div style="position: relative; top:300px;">
        <div style='position: relative; width:300px; margin:auto; color:White;'>
            <asp:Label ID="Label1" runat="server" Text="ConfigFile Name:"></asp:Label>
            <asp:TextBox ID="TextBox1" CssClass="floatRight" runat="server"></asp:TextBox>
            <br/><br/>
            <asp:Label ID="Label2" runat="server" Text="Width:"></asp:Label>
            <asp:TextBox ID="TextBox2" CssClass="floatRight" runat="server"></asp:TextBox>
            <br/><br/>
            <asp:Label ID="Label3" runat="server" Text="Height:"></asp:Label>
            <asp:TextBox ID="TextBox3" CssClass="floatRight" runat="server"></asp:TextBox>
            <br/><br/>
            <asp:Label ID="Label4" runat="server" Text="Deep:"></asp:Label>
            <asp:TextBox ID="TextBox4" CssClass="floatRight" runat="server"></asp:TextBox>
            <br/><br/>
        </div>
        <!--To DO: Generate several TextBoxes stander for each room-->
        <div style="position:relative; width:100px; margin:auto; margin-top:10px;"><asp:Button ID="btnGenerate" OnClick="btnGenerate_Click" runat="server" Text="Next"/></div>
        
    </div>
    </form>
</body>
</html>
<script type="text/javascript" src="../Core/three.js"></script>
<script type="text/javascript" src="../Core/ColladaLoader.js"></script>
<script type="text/javascript" src="../Core/AllScene.js"></script>
<%--<script type = "text/javascript">
    function moveDir(dir) {
        AllSceneControler.move(dir);
    }

    var Scene = null;
    var camera = null;
    var AllSceneControler = null;
    var renderer = null;

    function Init() {
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000000);
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 500
        Scene = new THREE.Scene();
        AllSceneControler = new AllScene.Controler('file', Scene, function () { Init(); animate(); });
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        renderer.render(Scene, camera);
    }
</script>--%>

