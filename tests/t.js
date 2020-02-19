// const Output = require('./dist/index.min.js');
import Output, {
  HeaderOutput, ParagraphOutput, QuoteOutput, ListOutput, ImageOutput, WarningOutput, DelimiterOutput, CodeBoxOutput
} from '../dist/index.min.js';
import React from 'react';

console.log(CodeBoxOutput);
console.log(<CodeBoxOutput data={{
  "type": "codeBox",
  "data": {
    "code": ".codeBoxTextArea{\n  width: 100%;\n  min-height: 30px;\n  padding: 10px;\n  border-radius: 2px 2px 2px 0;\n  border: none !important;\n  outline: none !important;\n  font: 14px monospace;\n}\n\n.codeBoxSelectDiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n}",
    "language": "css",
    "theme": "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-dark.min.css"
  }
}} />);

console.log(ParagraphOutput);
console.log(<ParagraphOutput data= {{"text":"A few words about iWall"}} />);

console.log(ListOutput);
console.log(<ListOutput data={{
  "items" : ["Item one", "Another item", "Item 3"],
  "style" : "unordered"
}} />);

console.log(Output);
console.log(<Output data={{"time":1572712253468,"blocks":[{"type":"paragraph","data":{"text":"This is a test description..."}},{"type":"image","data":{"file":{"url":"../../static/images/bomdisoft.png_1572711425922.png"},"caption":"https://bomdisoft.com","withBorder":false,"stretched":false,"withBackground":false}},{"type":"paragraph","data":{"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quae distinctio facilis in minus quaerat non illum adipisci ab similique eos est eligendi cumque, quibusdam, fugit voluptates omnis pariatur!"}},{"type":"header","data":{"text":"Section Header","level":4}},{"type":"paragraph","data":{"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quae distinctio facilis in minus quaerat non illum adipisci ab similique eos est eligendi cumque, quibusdam, fugit voluptates omnis pariatur!"}},{"type":"list","data":{"style":"ordered","items":["First iteration","Second iteration"]}},{"type":"paragraph","data":{"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quae distinctio facilis in minus quaerat non illum adipisci ab similique eos est eligendi cumque, quibusdam, fugit voluptates omnis pariatur!"}},{"type":"table","data":{"content":[["<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">Name</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">Age</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">Position</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">SSN</div></div>"],["<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">Jack&nbsp;</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">51</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">All trades</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">654654414131333</div></div>"],["<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">John Doe</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">21</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">Senior Consultant</div></div>","<div class=\"tc-table__area\"><div class=\"tc-table__inp\" contenteditable=\"true\">0002145465145641</div></div>"]]}},{"type":"paragraph","data":{"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quae distinctio facilis in minus quaerat non illum adipisci ab similique eos est eligendi cumque, quibusdam, fugit voluptates omnis pariatur!&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quae distinctio facilis in minus quaerat non illum adipisci ab similique eos est eligendi cumque, quibusdam, fugit voluptates omnis pariatur!"}},{"type":"header","data":{"text":"Milestones","level":4}},{"type":"checklist","data":{"items":[{"text":"Gather requirements","checked":true},{"text":"Develop API","checked":true},{"text":"Notify stakeholders","checked":false},{"text":"Develop Web App","checked":false}]}},{"type":"paragraph","data":{"text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus quae distinctio facilis in minus quaerat non illum adipisci ab similique eos est eligendi cumque, quibusdam, fugit voluptates omnis pariatur!"}},{"type":"warning","data":{"title":"","message":"There is a down to every up, a left to every right, a demon to every angel"}}],"version":"2.14.0"}} />);
