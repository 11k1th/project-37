class Form {

    constructor() {

      this.title = createElement('h1');
      this.button = createButton("submit");
      this.input = createInput("name");
      this.input2 = createInput("answer");

      this.question = createElement('h3');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
    }

    display() {

        title.html("Quiz Game");
        title.position(130,0);

        question.html("8! = ?");
        question.position(200 , 75)

        input.position(350,160);
        input2.position(450,200);
        button.position(500,500);

        button.mousePressed(function() {

          input.hide();
          input2.hide();
          button.hide();
            var name = input.value()
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("Hello " + name);
            greeting.position(130,160);

    })
  }
}