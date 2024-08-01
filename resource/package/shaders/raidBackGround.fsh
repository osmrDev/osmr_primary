#ifdef GL_ES
precision lowp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
//uniform sampler2D CC_Texture0;

void main()
{
	float offset = CC_Time.y * 0.5;
    vec2 texCoord = v_texCoord;
    float degX = (((v_texCoord.y+offset) * 2.0) - 1.0) * 360.0;
    float radX = radians(degX);
    texCoord.x += (sin(radX) * 0.0625);
    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, texCoord);
}
