export const waterShader = {
    vertex: `
      varying vec2 vUv;
      uniform float uTime;
  
      void main() {
        vUv = uv;
        vec3 pos = position;
  
        // Distorsión en la posición (efecto agua)
        pos.x += sin(uv.y * 10.0 + uTime * 2.0) * 0.05;
        pos.y += cos(uv.x * 10.0 + uTime * 2.0) * 0.05;
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragment: `
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float uTime;
  
      void main() {
        vec2 distortedUv = vUv;
        distortedUv.x += sin(distortedUv.y * 10.0 + uTime) * 0.02;
        distortedUv.y += cos(distortedUv.x * 10.0 + uTime) * 0.02;
  
        vec4 textureColor = texture2D(uTexture, distortedUv);
        gl_FragColor = textureColor;
      }
    `
  };
  