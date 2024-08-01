#ifdef GL_ES
precision lowp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
uniform float u_radianRight;
uniform float u_radianLeft;
const vec3 grayScale = vec3(0.298912, 0.586611, 0.114478); 

void main()
{
    float r = atan(v_texCoord.y - 0.5, v_texCoord.x - 0.5);
    if (((r >= 0.0) && (r < u_radianRight)) || ((r >= -3.1416) && (r < u_radianLeft))) {
        gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
    }
    else {
		vec4 color = texture2D(CC_Texture0, v_texCoord); 
		float grayScaleColor = dot(color.rgb, grayScale);
		gl_FragColor = vec4(vec3(grayScaleColor * 0.5), color.a);
	}
    /* ラスター.
    float offset = CC_Time.y * 0.5;
    vec2 texCoord = v_texCoord;
    float degX = (((v_texCoord.y+offset) * 2.0) - 1.0) * 360.0;
    float radX = radians(degX);
    texCoord.x += (sin(radX) * 0.0625);
    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, texCoord);
    */
}
