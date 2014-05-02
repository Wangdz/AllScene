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
<script type="text/javascript">
    //We use a 3 vec array to present our rooms' position in the world
    var AllScene = [];
    
    AllScene.Controler = function(){};
    AllScene.Controler.prototype = {
        currentRoom: new AllScene.Room('none_file');
        sceneRooms: new AllScene.SysRooms(),
        Move: function (dir){

          //To Do: change the 'cureent room' with dir(up, down, left, right, forward, back)

        }
    
    }

    AllScene.SysRooms = function (w, h, t) {
        this.setRange(w, h, t);
    }

    AllScene.SysRooms.prototype = {

        width: 1, height: 1, thickness: 1,

        rooms: [],

        setRange: function (w, h, t) {
            this.width = w;
            this.height = h;
            this.thickness = t;
            init();
        },

        init: function () {
            for (var i = 0; i < this.width; i++) {
                this.rooms.push(new Array());
                for (var j = 0; j < this.height; j++) {
                    this.rooms[i].push(new Array);
                    for (var m = 0; m < this.thickness; m++)
                        this.rooms[i][j].push(new AllScene.Room('none_file'));
                }
            }
        },

        setModel: function (w, h, t, f) {
            this.rooms[w][h][t].file = f;
        }


    }

   //One room contains a scene to render
    AllScene.Room = function (file) {
     }

    AllScene.Room.prototype = {
     
     file: 'none_file',
    
     scene: new THREE.Scene(),
     
     loadModel: function{
        //To Do: load the modle to the scene
     }
    
    }
</script>
