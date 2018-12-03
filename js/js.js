if( typeof window.requestAnimationFrame === 'undefined' ) {
    window.requestAnimationFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
}
setTimeout(Bubbles,10);
function Bubbles() {
	var bubbles = [];
	var amount = 64;
	var cont = document.createElement('div');
    cont.className = 'bubble-container';
    function setup() {
        var styleSource = ".bubble-container{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.bubble{z-index:9999;-moz-border-radius:50%;-moz-opacity:.3;-ms-border-radius:50%;-ms-filter:\"progid: DXImageTransform.Microsoft.Alpha(Opacity=50)\";-ms-opacity:.3;-o-border-radius:50%;-o-opacity:.3;-webkit-border-radius:50%;-webkit-opacity:.3;background:-moz-radial-gradient(33% 33%,circle,rgb(72.588%,98.858%,100%),rgb(0%,77.23%,80.588%));background:-ms-radial-gradient(33% 33%,circle,rgb(72.588%,98.858%,100%),rgb(0%,77.23%,80.588%));background:-o-radial-gradient(33% 33%,circle,rgb(72.588%,98.858%,100%),rgb(0%,77.23%,80.588%));background:-webkit-radial-gradient(33% 33%,circle,rgb(72.588%,98.858%,100%),rgb(0%,77.23%,80.588%));background:radial-gradient(33% 33%,circle,rgb(72.588%,98.858%,100%) 0,rgb(0%,77.23%,80.588%) 100%);border-radius:50%;border:1px solid rgba(68.588%,98.691%,100%,.88);opacity:.3;position:absolute}.bubble::before{-moz-border-radius:50%;-moz-filter:blur(1%);-ms-border-radius:50%;-ms-filter:blur(1%);-o-border-radius:50%;-o-filter:blur(1%);-webkit-border-radius:50%;-webkit-filter:blur(1%);background:-moz-radial-gradient(40% 0,circle,#fff,rgba(255,255,255,0) 58%);background:-ms-radial-gradient(40% 0,circle,#fff,rgba(255,255,255,0) 58%);background:-o-radial-gradient(40% 0,circle,#fff,rgba(255,255,255,0) 58%);background:-webkit-radial-gradient(40% 0,circle,#fff,rgba(255,255,255,0) 58%);background:radial-gradient(40% 0,circle,#fff 0,rgba(255,255,255,0) 58%);border-radius:50%;content:'';filter:blur(1%);filter:\"progid: DXImageTransform.Microsoft.Blur(PixelRadius='3')\";filter:url(#blur);height:90%;left:5%;position:absolute;top:1%;width:90%;z-index:99999}",
            style = document.createElement('style'),
            text = 'textContent' in style ? 'textContent' : 'innerText';
        style[text] = styleSource;
        document.head.appendChild(style);
        var div = document.createElement('div');
        div.innerHTML = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' height='0' width='0'><defs><filter id='blur' x='0' y='0'><feGaussianBlur stdDeviation='3'/></filter></defs></svg>";
        cont.appendChild(div);
		for( var i = 0; i < amount; i++ ) {
				var bubble = {
						element: document.createElement('div'),
						x: Math.random() * document.body.clientWidth,
						y: Math.random() * document.body.clientHeight,
						vx: Math.random() * 2 - 1,
						vy: Math.random() * 2 * -1,
						size: ~~(Math.random() * 54 + 10)
					};
				bubble.element.className = 'bubble';
				bubble.element.style.height = bubble.element.style.width = bubble.size + 'px';
				bubbles.push(bubble);
				cont.appendChild(bubble.element);
		}
        document.body.appendChild(cont);
    }
	function run() {
		var height = document.body.offsetHeight,
			width = document.body.offsetWidth;
		for( var i = 0; i < amount; i++ ) {
			var bubble = bubbles[i];
			bubble.x += bubble.vx;
			bubble.y += bubble.vy;
			if( bubble.x - bubble.size > width ) {
				bubble.x = 0 - bubble.size;
			}
			if( bubble.x + bubble.size < 0) {
				bubble.x = bubble.size + width;
			}
			if( bubble.y + bubble.size < 0) {
				bubble.y = bubble.size + height;
			}
			bubble.element.style.left = bubble.x + 'px';
			bubble.element.style.top = bubble.y + 'px';
		}
		requestAnimationFrame(run);
	}
	setup();
	run();
}