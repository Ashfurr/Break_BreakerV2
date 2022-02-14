class Walls {
    constructor(Tableau1){
        this.scene=Tableau1
        this.wall=this.scene.physics.add.staticGroup();
        this.wall.create(0,0,"pad").setOrigin(0.0).setDisplaySize(20,gameConfig.height).refreshBody();
        this.wall.create(gameConfig.width-20,0,"pad").setOrigin(0.0).setDisplaySize(20,gameConfig.height).refreshBody();
        this.wall.create(0,0,"pad").setOrigin(0.0).setDisplaySize(gameConfig.width,20).refreshBody();
        this.scene.physics.add.collider(this.wall,this.scene.ballT.ballC)
    }
}