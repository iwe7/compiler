import * as chars from "./chars";
export class Scanner {
  peek!: number;
  peekPeek: number;

  length: number = 0;
  index: number = -1;
  column: number = -1;
  line: number = 0;

  _trackComments: boolean = false;

  get currentChar() {
    return String.fromCharCode(this.peek);
  }

  constructor(public input: string) {
    this.length = this.input.length;
    this.peekPeek = this.peekAt(0);
    this.next();
  }

  peekAt(index: number): number {
    return index >= this.length ? chars.$EOF : this.input.charCodeAt(index);
  }
  next(): void {
    if (isNewline(this.peek)) {
      this.column = 0;
      this.line++;
    } else {
      this.column++;
    }
    this.index++;
    this.peek = this.peekPeek;
    this.peekPeek = this.peekAt(this.index + 1);
  }

  consumeEmptyStatements(): void {
    this.consumeWhitespace();
    while (this.peek == chars.$SEMICOLON) {
      this.next();
      this.consumeWhitespace();
    }
  }

  consumeWhitespace(): void {
    while (chars.isWhitespace(this.peek) || isNewline(this.peek)) {
      this.next();
      if (!this._trackComments && isCommentStart(this.peek, this.peekPeek)) {
        this.next(); // /
        this.next(); // *
        while (!isCommentEnd(this.peek, this.peekPeek)) {
          if (this.peek == chars.$EOF) {
            this.error("Unterminated comment");
          }
          this.next();
        }
        this.next(); // *
        this.next(); // /
      }
    }
  }

  error(msg: string) {}

  scan(): any | null {}
}

export function isNewline(code: number): boolean {
  switch (code) {
    case chars.$FF:
    case chars.$CR:
    case chars.$LF:
    case chars.$VTAB:
      return true;
    default:
      return false;
  }
}

function isCharMatch(target: number, previous: number, code: number): boolean {
  return code == target && previous != chars.$BACKSLASH;
}

function isCommentStart(code: number, next: number): boolean {
  return code == chars.$SLASH && next == chars.$STAR;
}

function isCommentEnd(code: number, next: number): boolean {
  return code == chars.$STAR && next == chars.$SLASH;
}
