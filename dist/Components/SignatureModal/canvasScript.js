export var canvasScript = "\n    let bodyWidth = document.body.clientWidth;\n    let bodyHeight = document.body.clientHeight;\n    if(!bodyWidth) {\n      bodyWidth = window.innerWidth;\n    }\n    if(!bodyHeight) {\n      bodyHeight = window.innerHeight;\n    }\n\n    const canvasWidth = bodyWidth;\n    const canvasHeight = bodyHeight;\n\n    const canvas = document.getElementById(\"signatureCanvas\");\n    canvas.width = canvasWidth;\n    canvas.height = canvasHeight;\n    const ctx = canvas.getContext(\"2d\");\n\n    const getTouchCoords = (e) => {\n       const touch = e.changedTouches[0];\n       const rect = canvas.getBoundingClientRect();\n       const x = touch.clientX - rect.left;\n       const y = touch.clientY - rect.top;\n       return { x, y }\n    }\n\n    const getMouseCoords = (e) => {\n       const rect = canvas.getBoundingClientRect();\n       const x = e.clientX - rect.left;\n       const y = e.clientY - rect.top;\n       return { x, y }\n    }\n\n    let isMouseDown = false;\n    canvas.addEventListener(\"mousedown\", function (e) {\n      e.preventDefault();\n      ctx.beginPath();\n      ctx.lineWidth = 2;\n      isMouseDown = true;\n      const coords = getMouseCoords(e);\n      ctx.moveTo(coords.x, coords.y);\n    });\n\n    canvas.addEventListener(\"mousemove\", function (e) {\n      e.preventDefault();\n      if(isMouseDown) {\n        const coords = getMouseCoords(e);\n        ctx.lineTo(coords.x, coords.y);\n        ctx.stroke();\n      }\n    });\n\n    canvas.addEventListener(\"mouseup\", function (e) {\n      e.preventDefault();\n      isMouseDown = false;\n      window.parent.postMessage(canvas.toDataURL())\n    });\n\n    canvas.addEventListener(\"touchstart\", function (e) {\n      e.preventDefault();\n      ctx.beginPath();\n      ctx.lineWidth = 2;\n      const coords = getTouchCoords(e);\n      ctx.moveTo(coords.x, coords.y);\n    });\n\n    canvas.addEventListener(\"touchmove\", function (e) {\n      e.preventDefault();\n      const coords = getTouchCoords(e);\n      ctx.lineTo(coords.x, coords.y);\n      ctx.stroke();\n    });\n\n    canvas.addEventListener(\"touchend\", function (e) {\n      e.preventDefault();\n      window.ReactNativeWebView.postMessage(canvas.toDataURL());\n    });\n  ";
