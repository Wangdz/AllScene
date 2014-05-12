var MoveDir = ['Left', 'Right', 'Forward', 'Back', 'Up', 'Down'];
//We use a 3 vec array to present our rooms' position in the world
var AllScene = function () { }
AllScene.RoomsContainer = function (w, h, t, ascene) {
    this.scene = ascene;
    this.callBack = acallBack;
    this.setRange(w, h, t);
}
AllScene.RoomsContainer.prototype =
{
    scene: null,
    width: 1,
    height: 1,
    thickness: 1,
    rooms: [],
    callBack: null,
    setRange: function (w, h, t) {
        this.width = w;
        this.height = h;
        this.thickness = t;
        this.init();
    },

    init: function () {
        for (var i = 0; i < this.width; i++) {
            this.rooms.push(new Array());
            for (var j = 0; j < this.height; j++) {
                this.rooms[i].push(new Array);
                for (var k = 0; k < this.thickness; k++)
                    this.rooms[i][j].push(new AllScene.Room('none_file', new THREE.Vector3(i, j, k), this.scene));
            }
        }
    },

    setModel: function (w, h, t, f) {
        this.rooms[w][h][t].file = f;
    },

    LoadRoomsFiles: function (jasonObj) {
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                for (var k = 0; k < this.thickness; k++) {
                    this.rooms[i][j].push(new AllScene.Room(jasonObj.files[i][j][k], new THREE.Vector3(i, j, k), this.scene));
                    this.rooms[i][j].loadFunc = this.callBack;
                }
            }
        }
    }

}
//One room contains a scene to render
AllScene.Room = function (file, pos, ascene) {
    this.position = pos;
    this.scene = ascene;
    this.file = file;
}
AllScene.Room.prototype =
{
    position: new THREE.Vector3(),
    scene: null,
    file: 'none_file',
    loadFunc: null,
    scene: new THREE.Scene(),
    loadModel: function () {
        var loader = new THREE.ColladaLoader();
        loader.options.convertUpAxis = true;
        loader.load(this.file, function (collada) {
            dae = collada.scene;
            dae.scale.x = dae.scale.y = dae.scale.z = 0.002;
            dae.updateMatrix();
            this.scene.add(dae);
        })
        //Set UI effects
        if (this.loadFunc != null)
            this.loadFunc();
    }

}
AllScene.Controler = function (sFile, ascene, callBackFunc) {

    this.scene = ascene;
    this.callBack = callBackFunc;
    loadFiles(sFile);

}
AllScene.Controler.prototype =
{
    scene: null,
    currentRoom: null,
    sceneRooms: null,
    loadFiles: function (sFile) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 0 || request.status == 200) {
                    if (request.responseXML) {

                    }
                    else if (request.responseText) {
                        ///-----------JASON Structure------------///
                        ///SceneWidth,SceneHeight,SceneThick     ///
                        ///StartPos                              ///
                        var fixedResponse = response.responseText.replace(/\\'/g, "'");
                        var jsonObj = JSON.parse(fixedResponse);
                        this.sceneRooms = new AllScene.RoomsContainer(jsonObj.SceneWidth, jsonObj.SceneHeight, jsonObj.SceneThick, this.scene);
                        this.sceneRooms.callBack = this.callBack;
                        this.sceneRooms.LoadRoomsFiles(jsonObj);
                        this.moveTo(jsonObj.StartPos.x, jsonObj.StartPos.y, jsonObj.StartPos.z);
                    }
                    else {
                        console.error("ColladaLoader: Empty or non-existing file (" + url + ")");
                    }
                }
            } else if (request.readyState == 3) {

            }
        }
        request.open("GET", url, true);
        request.send(null);
    },
    callBack: function () { }, //May be we will do something when moving to another room
    moveTo: function (x, y, z) {
        try {
            tempRoom = this.sceneRooms.rooms[x][y][z]
            if (tempRoom != undefined)
                this.currentRoom = tempRoom;
            for (var i = 0; i < this.scene.children.length; i++) {
                this.scene.remove(this.scene.children[i]);
            }
            this.currentRoom.loadModel();
        } catch (e) {
            console.error('no such a room')
        }
    },
    move: function (dir) {
        //Right hand coordinate system z axis point to up
        with (this.currentRoom.position) {
            if (dir == 'Left') {
                this.moveTo(x - 1, y, z)
            }
            else if (dir == 'Right') {
                this.moveTo(x + 1, y, z)
            }
            else if (dir == 'Forward') {
                this.moveTo(x, y + 1, z)
            }
            else if (dir == 'Back') {
                this.moveTo(x, y - 1, z)
            }
            else if (dir == 'Up') {
                this.moveTo(x, y, z + 1)
            }
            else if (dir == 'Down') {
                this.moveTo(x, y, z - 1)
            }
        }
    }
}
//Tools用操作空间 地面类 这地面应该可以响应鼠标的亮显
//会接收盒子 并管理鼠标的吸附位置
AllScene.Ground = function (aWith, aHeight) {
    this.width = 1;
    this.height = 1;
}
AllScene.Ground.prototype = {
    width: 1,//地面网格的宽度
    height: 1,//地面网格的高度(长度)
    mesh: null, //一个网格类的实例。用作工作空间的布置地面
    curCube: null, //一个网格类的实例。用作当前跟随鼠标的Cube。
    roomsContainer: null, //一个AllScene.RoomsContainer的实例
    generateCube: function (e){ //传进来一个鼠标位置，在鼠标位置建立一个Cube，给curCube,curCube会跟随鼠标移动，可能会被一个点击按钮的动作出发
    },
    Snap: function (e) { },//捕捉函数，会捕捉鼠标的位置，也管理curCube的跟随，然后运算接下来的立方体被放到的位置,会调用HIghtLight去亮显当前的地面网格，或者cube的上表面。
    Dock: function (cube, vec3) {cube.position.set(vec3) },//根据参数在指定位置停放一个Cube
    HightLight: function (vec3) { } //设置地面网格亮显,以及cube的上表面亮显。
}