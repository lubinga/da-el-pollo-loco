class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;
    x = 0;
    speed = 0.4;

    movingAnimations;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.movingAnimations = setInterval(() => {
            this.moveLeft();
        }, 1000/40)
    }
}