import {
  CssAstVisitor,
  CssStyleValueAst,
  CssInlineRuleAst,
  CssAtRulePredicateAst,
  CssKeyframeRuleAst,
  CssKeyframeDefinitionAst,
  CssMediaQueryRuleAst,
  CssSelectorRuleAst,
  CssSelectorAst,
  CssSimpleSelectorAst,
  CssPseudoSelectorAst,
  CssDefinitionAst,
  CssBlockAst,
  CssStylesBlockAst,
  CssStyleSheetAst,
  CssUnknownRuleAst,
  CssUnknownTokenListAst
} from "./css_ast";

export const cssAstVisitorDefault: CssAstVisitor = {
  visitCssValue: (ast: CssStyleValueAst, context?: any): any => {},
  visitCssInlineRule: (ast: CssInlineRuleAst, context?: any): any => {},
  visitCssAtRulePredicate: (
    ast: CssAtRulePredicateAst,
    context?: any
  ): any => {},
  visitCssKeyframeRule: (ast: CssKeyframeRuleAst, context?: any): any => {},
  visitCssKeyframeDefinition: (
    ast: CssKeyframeDefinitionAst,
    context?: any
  ): any => {},
  visitCssMediaQueryRule: (ast: CssMediaQueryRuleAst, context?: any): any => {},
  visitCssSelectorRule: (ast: CssSelectorRuleAst, context?: any): any => {
    ast.selectors.map(select => {
      select.visit(cssAstVisitorDefault);
    });
  },
  visitCssSelector: (ast: CssSelectorAst, context?: any): any => {
    ast.selectorParts.map(sele => {
      sele.visit(cssAstVisitorDefault);
    });
  },
  visitCssSimpleSelector: (ast: CssSimpleSelectorAst, context?: any): any => {},
  visitCssPseudoSelector: (ast: CssPseudoSelectorAst, context?: any): any => {},
  visitCssDefinition: (ast: CssDefinitionAst, context?: any): any => {},
  visitCssBlock: (ast: CssBlockAst, context?: any): any => {},
  visitCssStylesBlock: (ast: CssStylesBlockAst, context?: any): any => {
    ast.definitions.map(define => {
      define.visit(cssAstVisitorDefault);
    });
  },
  visitCssStyleSheet: (ast: CssStyleSheetAst, context?: any): any => {
    ast.rules.map(res => {
      res.visit(cssAstVisitorDefault);
    });
  },
  visitCssUnknownRule: (ast: CssUnknownRuleAst, context?: any): any => {},
  visitCssUnknownTokenList: (
    ast: CssUnknownTokenListAst,
    context?: any
  ): any => {}
};
