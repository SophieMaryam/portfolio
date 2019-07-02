{/* <script type="text/javascript" src="particles.js"></script>
<script type="text/javascript" src="../particles.min.js"></script> */}
<script type="text/javascript" src="app.js"></script>
<script type="application/json" src="../src/assets/particles.json"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
// particlesJS.load(@dom-id, @path-json, @callback (optional));
{/* <script> 
  particlesJS.load("particles-js", "../src/assets/particles.json", () => {
  console.log("callback - particles.js config loaded");
  }); 
</script> */}
<script>
  AOS.init({
    duration: 1200,
  });
</script>

<script>
$(function() {
$("#navigation").load("navigation.html");
});</script>