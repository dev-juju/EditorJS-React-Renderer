// const Output = require('./dist/index.min.js');
import Output, { 
	HeaderOutput, ParagraphOutput, QuoteOutput, ListOutput, ImageOutput, WarningOutput 
} from './dist/index.min.js';

console.log(ParagraphOutput);
console.log(ParagraphOutput({"text":"A few words about iWall"}));

console.log(ListOutput);
console.log(ListOutput({
	"items" : ["Item one", "Another item", "Item 3"],
	"style" : "unordered"
}));

console.log(Output);
console.log(Output({"time":1564767102436,"blocks":[{"type":"paragraph","data":{"text":"A few words about iWall"}},{"type":"quote","data":{"text":"The idea for an idea repository and a platform to foster ideation in KN is not mine. This is something <mark class=\"cdx-marker\">Martin Fritz</mark> and <mark class=\"cdx-marker\">Ian Casey</mark> have been pushing for some time now. I simply took their vision and ran with it a few more miles by building iWall. Martin Fritz has spoken about this vision on a town hall and the FoA Road Show I’ve attended so far here in Tallinn. I had a short talk with him during the last meeting, about what exactly was needed to move forward with the vision. He spoke about an idea repository as a first step and also told me more about this funnel-like flow of ideas from inception to adoption. The <code class=\"inline-code\">iWall</code> rules are based on this structure – I tried to define rules that would support this structure while also being as flexible as possible to support possible future improvements.<br>Apart from these, a combination of other events led to my decision to start this project. One of them is the monthly meetings we had with our senior manager at the time (<mark class=\"cdx-marker\">Ants Anupold</mark>). We had a system where you would pin ideas on a board next to his office whenever you had one and we would all gather to review them once every month and make a decision which to carry forward and implement. While this system was great, it had a few pitfalls which I thought a platform like this could improve upon. For example, sometimes you have an idea but the thought of leaving your desk in the middle of work to go pin it on a wall on some other floor either simply kills it, or you procrastinate the action and then forget to do it later altogether. Or maybe the idea pops into your head while you’re out of office. This is where the name came from –&nbsp;<b>iWall</b>&nbsp;as in&nbsp;<b>I</b>dea&nbsp;<b>Wall</b>.&nbsp;&nbsp;<br>","caption":"Adombang Munang Mbomndih","alignment":"left"}},{"type":"paragraph","data":{"text":"I look forward to what lies ahead :)"}},{"type":"image","data":{"file":{"url":"/static/images/iwall.png_1564767057102.png"},"caption":"","withBorder":false,"stretched":false,"withBackground":false}}],"version":"2.14.0"}));
