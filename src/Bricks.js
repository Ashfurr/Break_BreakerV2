class Bricks {
    constructor(Tableaux1){
        this.scene=Tableaux1
        this.construct()
    }
        construct() {
            this.brique = this.scene.physics.add.staticGroup()
            for (let i = 1; i <= 3; i++) {
                this.brique.createMultiple({
                    key: 'bricks',
                    repeat: 8,
                    setXY: {x: 160, y: 100 + i * 31, stepX: 61},
                })
            }

            this.brique.createMultiple({
                key: 'bricks',
                repeat: 3,
                setXY: {x: 160, y: 224, stepX: 61},
            })
            this.verte = this.brique.create(404, 224, 'bricks').setTintFill(0x00FF00)
            this.rouge = this.brique.create(465, 224, 'bricks').setTintFill(0xFF0000)
            this.brique.createMultiple({
                key: 'bricks',
                repeat: 2,
                setXY: {x: 526, y: 224, stepX: 61},
            })
            this.brique.createMultiple({
                key: 'bricks',
                repeat: 8,
                setXY: {x: 160, y: 255, stepX: 61},
            })
            this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
        }
//160 x car 9 brique*60 = 540 800-540=260/2=130+60/2=160 c'est pour centrer



    destroyBricks(ball,briques)
    {
        this.renvoie(briques)
        briques.destroy()
        if(briques==this.verte){
            this.scene.player.vie+=1
        }
        if(briques==this.rouge){
            this.scene.player.score+=10
        }
    }
    renvoie(briques){
        this.scene.win()
        this.rando=this.scene.ballT.ballC.x-briques.x
        this.coeff=this.rando/10
        this.coeff=this.coeff*1.5
        this.scene.ballT.ballC.setVelocityX(this.scene.ballT.ballC.body.velocity.x+this.coeff*5)
    }
}