var MoveDir = ['Left', 'Right', 'Forward', 'Back', 'Up', 'Down'];
//We use a 3 vec array to present our rooms' position in the world
var AllScene = function () { }
AllScene.RoomsContainer = function (w, h, t, ascene) {
    this.scene = ascene;
    this.setRange(w, h, t);
}
AllScene.RoomsContainer.prototype =
{
    scene: null,
    width: 1,
    height: 1,
    thickness: 1,
    rooms: [],

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
    scene: new THREE.Scene(),
    loadModel: function () {
        //Test
        var geometry = new THREE.CubeGeometry(100, 100, 100);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
    }

}

AllScene.Controler = function (w, h, t, ascene) {
    this.scene = ascene;
    this.sceneRooms = new AllScene.RoomsContainer(w, h, t, this.scene);
    this.moveTo(0, 0, 0);
}
AllScene.Controler.prototype =
{
    scene: null,
    currentRoom: null,
    sceneRooms: null,
    callBack: function () { }, //May be we will do something when moving to another room
    moveTo: function (x, y, z) {
        try {
            this.currentRoom = this.sceneRooms.rooms[x][y][z]
            this.scene.children.length = 0;
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
                this.moveTo(x, 1, z)
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