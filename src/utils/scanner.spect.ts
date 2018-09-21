import { Scanner } from "./scanner";
import { describe, it } from "mocha";
import { expect } from "chai";

/**
 {
     tagname: if
     attrs: {rule}
     children: []
 },
 {
     target: elseif
     attrs: {rule},
     children: []
 },
 {
     target: else,
     attr: {rule},
     children: []
 }
<if rule>
    <segment></segment>
    <elseif rule>
        <segment></segment>
    </elseif>
    <else rule>
        <segment></segment>
    </else>
</if>
 */
export enum Keywords {
  if = "if",
  else = "else",
  elseif = "elseif"
}
const scanner = new Scanner(`
    if(){}elseif(){}
    // some component
    some str
`);
describe("scanner", () => {
  it("new scanner", () => {
    expect(scanner instanceof Scanner).to.eq(true);
  });
  it("scanner advance", () => {
    scanner.next();
    scanner.consumeEmptyStatements();
    expect(scanner.currentChar).to.eq("/");
    scanner.next();
    expect(scanner.currentChar).to.eq("/");
    scanner.next();
    expect(scanner.currentChar).to.eq(" ");
    scanner.next();
    expect(scanner.currentChar).to.eq("s");
  });
});
