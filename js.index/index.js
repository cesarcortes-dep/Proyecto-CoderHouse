const app = document.getElementById("typewriter");
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 155,
});

typewriter
.typeString("QUE DELICIAAA!!")
.pauseFor(200)
.start();
