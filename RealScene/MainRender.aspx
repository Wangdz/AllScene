<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MainRender.aspx.cs" Inherits="RealScene_MainRender" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
<!--This page is the enter of the program, it is rendering one room a time
    This system should allow an user interactive with the other users by a input box,
    the commits will stay at the point when they are click the commit button and show in a 
    white solid textbox. 
-->

    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
</body>
</html>
<script type="text/javascript" src="../Core/three.js"></script>
<script type="text/javascript" src="../Core/AllScene.js"></script>
<script type = "text/javascript">
var Scene = null;
var camera = null;
var AllSceneControler = null;
var renderer = null;

Init();
animate();

function Init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000000);
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 500
    Scene = new THREE.Scene();
    AllSceneControler = new AllScene.Controler(10, 10, 2, Scene);
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
</script>

