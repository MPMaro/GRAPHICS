

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// Style Functions
function stroke(style) {
ctx.strokeStyle = style;
}
function fill(style) {
  ctx.fillStyle = style;
  }
  function lineWidth(width) {
    ctx.strokeStyle = width;
    }



// GRAPHICS LIBARAY

// Draw circle
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw a line
function line (x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke ();
}
// Draw Rectangle
function rect(x, y, w, h, mode) {
if (mode === "fill") {
  ctx.fillRect(x, y, w, h);
}

}
// DRAW ITEMS
// Draw a Balloon
function balloon (x, y, color, stringLength, ) {
  fill(color);
  circle(x + 20, y + 20, 20, "fill"); 
  line(x + 20, y + 40, x + 20, y + stringLength); 

}

function table (x, y, color)
fill(color);




