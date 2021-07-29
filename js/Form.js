class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("RESET");
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    image(startingImg,0,0,displayWidth,displayHeight)
    this.title.html("Asphalt 9: Legends");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 600  , displayHeight/2 - 250);
    this.button.position(displayWidth/2 - 400 , displayHeight/2-250);
    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello And Welcome To Asphalt 9:- Legends " + player.name);
      this.greeting.position(displayWidth/2 +250, displayHeight/4 + 50);
    });

    this.reset.position(displayWidth-100,20);
    this.reset.mousePressed(()=>{
      database.ref("players").remove();
      game.update(0);
      player.updateCount(0);
    })

  }
}
