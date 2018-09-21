import { describe, it } from "mocha";
import { expect } from "chai";

import { CssParser } from "./css_parser";
const cssParser = new CssParser();
import { cssAstVisitorDefault } from "./css_visitor";
const visitor = cssAstVisitorDefault;
describe("css parser", () => {
  it("可以创建", () => {
    expect(cssParser instanceof CssParser).to.eq(true);
  });
  it("", () => {
    const result = cssParser.parse(
      `
      .red{
        color: red;
      }
    `,
      ""
    );
    const ast = result.ast;
    ast.visit(visitor);
    expect(ast).to.eq({});
  });
});
