export const $EOF = 0;
// 水平制表符
export const $TAB = 9;
// 换行键
export const $LF = 10;
// 垂直制表符
export const $VTAB = 11;
// 换页键
export const $FF = 12;
// 回车键
export const $CR = 13;
// 空格
export const $SPACE = 32;
// 叹号
export const $BANG = 33;
// 双引号
export const $DQ = 34;
// 井号
export const $HASH = 35;
// 美元符
export const $$ = 36;
// 百分号
export const $PERCENT = 37;
// 和号
export const $AMPERSAND = 38;
// 闭单引号
export const $SQ = 39;
// 闭括号
export const $LPAREN = 40;
// 闭括号
export const $RPAREN = 41;
// 星号
export const $STAR = 42;
// 加号
export const $PLUS = 43;
// 逗号
export const $COMMA = 44;
// 减号/破折号
export const $MINUS = 45;
// 句号
export const $PERIOD = 46;
// 斜杠
export const $SLASH = 47;
// 冒号
export const $COLON = 58;
// 分号
export const $SEMICOLON = 59;
// 小于
export const $LT = 60;
// 等号
export const $EQ = 61;
// 大于
export const $GT = 62;
// 问号
export const $QUESTION = 63;

export const $0 = 48;
export const $9 = 57;

export const $A = 65;
export const $E = 69;
export const $F = 70;
export const $X = 88;
export const $Z = 90;
// 开方括号
export const $LBRACKET = 91;
// 反斜杠
export const $BACKSLASH = 92;
// 闭方括号
export const $RBRACKET = 93;
// 脱字符
export const $CARET = 94;
// 下划线
export const $_ = 95;
// 开单引号
export const $kai = 96;

export const $a = 97;
export const $e = 101;
export const $f = 102;
export const $n = 110;
export const $r = 114;
export const $t = 116;
export const $u = 117;
export const $v = 118;
export const $x = 120;
export const $z = 122;
// 开花括号
export const $LBRACE = 123;
// 垂线
export const $BAR = 124;
// 闭花括号
export const $RBRACE = 125;
// 波浪号
export const $bolang = 126;

export const $NBSP = 160;

export const $PIPE = 124;
export const $TILDA = 126;
export const $AT = 64;

export const $BT = 96;

export function isWhitespace(code: number): boolean {
  return (code >= $TAB && code <= $SPACE) || code == $NBSP;
}

export function isDigit(code: number): boolean {
  return $0 <= code && code <= $9;
}

export function isAsciiLetter(code: number): boolean {
  return (code >= $a && code <= $z) || (code >= $A && code <= $Z);
}

export function isAsciiHexDigit(code: number): boolean {
  return (
    (code >= $a && code <= $f) || (code >= $A && code <= $F) || isDigit(code)
  );
}
