
        /*
         * On page load
         */
        let canvas = document.getElementById("shapes");
        let context = canvas.getContext('2d');
        let shapesArr = new Array();
        let shapeInitialDensity = 0.04;
        let spawnRate = 0.03;

        var startShapes = 0;

        window.onload = function() {
            resize();

            // Randomly spawn shapes
            startShapes = shapeInitialDensity * canvas.width;
            for(var i = 0; i < startShapes; i++) {
                spawnShape(false);
            }
        };

        window.onresize = resize;

        function resize() {
            // Set up canvas
            // canvas.height = window.innerHeight * 0.8;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          
        }

        function drawShape(h) {
            let size = (1 - h.depth) * 10 + 5;

            context.beginPath();
            context.moveTo(h.x +  size * Math.cos(h.angle),
                h.y + size *  Math.sin(h.angle));

            for (var i = 1; i <= h.numSides; i++) {
                context.lineTo(h.x + size * Math.cos(i * 2
                    * Math.PI / h.numSides + h.angle), h.y + size
                    * Math.sin(i * 2 * Math.PI / h.numSides + h.angle));
            }

            let alpha = 0.5 - h.depth * h.depth;
            // context.strokeStyle = "rgba(147, 148, 152, " + alpha + ")";
            context.strokeStyle = "rgba(141, 90, 191, " + alpha + ")";
            context.lineWidth = 3; // edited to make the shapes thicker
            context.stroke();
        }

        function spawnShape(atTop) {
            var depth = Math.random();
            let dir = -Math.PI / 2;
            let angle = Math.random()*2*Math.PI;
            let angspeed = Math.random()*0.01;
            let size = (1 - depth) * 10 + 5;
            let position = {
                x: Math.random() * (canvas.width - 60) + 30,
                y: atTop ? (-size - 5) : (Math.random() * canvas.height)
            };

            let numSides = Math.random() < 0.6 ? 6 : 3;
            if (numSides == 3) {
                depth += (1 - depth) * 0.2;
            }

            shapesArr.push({
                numSides: numSides,
                x: position.x,
                y: position.y,
                depth: depth,
                dir: dir,
                angle: angle,
                angspeed: angspeed
            });
        }

        window.requestAnimFrame = (function(callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
                || window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        function animate() {
            if(Math.random() < spawnRate) spawnShape(true);

            // Clear
            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.restore();

            // Draw shapes
            for(var i = 0; i < shapesArr.length; i++) {
                let shape = shapesArr[i];
                drawShape(shape);

                let speed = (1 - shape.depth * shape.depth) / 3 + 0.1;
                shape.x += speed * Math.cos(shape.dir);
                shape.y -= speed * Math.sin(shape.dir);

                shape.angle += shape.angspeed;

                let size = (1 - shape.depth) * 10 + 5;
                if(shape.x < -size - 6 || shape.x > canvas.width + size + 6 ||
                        shape.y < -size - 6 || shape.y > canvas.height + size + 6) {
                    shapesArr.splice(i, 1);
                    i--;
                }
            }

            // Draw gradient mask
            // let mask = context.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
            let mask = context.createLinearGradient(0, 0, 0, canvas.height);
            mask.addColorStop(0, "rgba(255, 255, 255, 0)");
            mask.addColorStop(1, "#8D5ABF");

            context.fillStyle = mask;
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Request new frame
            requestAnimFrame(animate);
        }

        animate();
    