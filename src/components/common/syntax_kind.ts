export enum SyntaxKind {
  Unknown = 0,
  EndOfFileToken = 1,
  SingleLineCommentTrivia = 2,
  MultiLineCommentTrivia = 3,
  NewLineTrivia = 4,
  WhitespaceTrivia = 5,
  ShebangTrivia = 6,
  ConflictMarkerTrivia = 7,
  NumericLiteral = 8,
  StringLiteral = 9,
  JsxText = 10,
  JsxTextAllWhiteSpaces = 11,
  RegularExpressionLiteral = 12,
  NoSubstitutionTemplateLiteral = 13,
  TemplateHead = 14,
  TemplateMiddle = 15,
  TemplateTail = 16,
  OpenBraceToken = 17,
  CloseBraceToken = 18,
  OpenParenToken = 19,
  CloseParenToken = 20,
  OpenBracketToken = 21,
  CloseBracketToken = 22,
  DotToken = 23,
  DotDotDotToken = 24,
  SemicolonToken = 25,
  CommaToken = 26,
  LessThanToken = 27,
  LessThanSlashToken = 28,
  GreaterThanToken = 29,
  LessThanEqualsToken = 30,
  GreaterThanEqualsToken = 31,
  EqualsEqualsToken = 32,
  ExclamationEqualsToken = 33,
  EqualsEqualsEqualsToken = 34,
  ExclamationEqualsEqualsToken = 35,
  EqualsGreaterThanToken = 36,
  PlusToken = 37,
  MinusToken = 38,
  AsteriskToken = 39,
  AsteriskAsteriskToken = 40,
  SlashToken = 41,
  PercentToken = 42,
  PlusPlusToken = 43,
  MinusMinusToken = 44,
  LessThanLessThanToken = 45,
  GreaterThanGreaterThanToken = 46,
  GreaterThanGreaterThanGreaterThanToken = 47,
  AmpersandToken = 48,
  BarToken = 49,
  CaretToken = 50,
  ExclamationToken = 51,
  TildeToken = 52,
  AmpersandAmpersandToken = 53,
  BarBarToken = 54,
  QuestionToken = 55,
  ColonToken = 56,
  AtToken = 57,
  EqualsToken = 58,
  PlusEqualsToken = 59,
  MinusEqualsToken = 60,
  AsteriskEqualsToken = 61,
  AsteriskAsteriskEqualsToken = 62,
  SlashEqualsToken = 63,
  PercentEqualsToken = 64,
  LessThanLessThanEqualsToken = 65,
  GreaterThanGreaterThanEqualsToken = 66,
  GreaterThanGreaterThanGreaterThanEqualsToken = 67,
  AmpersandEqualsToken = 68,
  BarEqualsToken = 69,
  CaretEqualsToken = 70,
  Identifier = 71,
  BreakKeyword = 72,
  CaseKeyword = 73,
  CatchKeyword = 74,
  ClassKeyword = 75,
  ConstKeyword = 76,
  ContinueKeyword = 77,
  DebuggerKeyword = 78,
  DefaultKeyword = 79,
  DeleteKeyword = 80,
  DoKeyword = 81,
  ElseKeyword = 82,
  EnumKeyword = 83,
  ExportKeyword = 84,
  ExtendsKeyword = 85,
  FalseKeyword = 86,
  FinallyKeyword = 87,
  ForKeyword = 88,
  FunctionKeyword = 89,
  IfKeyword = 90,
  ImportKeyword = 91,
  InKeyword = 92,
  InstanceOfKeyword = 93,
  NewKeyword = 94,
  NullKeyword = 95,
  ReturnKeyword = 96,
  SuperKeyword = 97,
  SwitchKeyword = 98,
  ThisKeyword = 99,
  ThrowKeyword = 100,
  TrueKeyword = 101,
  TryKeyword = 102,
  TypeOfKeyword = 103,
  VarKeyword = 104,
  VoidKeyword = 105,
  WhileKeyword = 106,
  WithKeyword = 107,
  ImplementsKeyword = 108,
  InterfaceKeyword = 109,
  LetKeyword = 110,
  PackageKeyword = 111,
  PrivateKeyword = 112,
  ProtectedKeyword = 113,
  PublicKeyword = 114,
  StaticKeyword = 115,
  YieldKeyword = 116,
  AbstractKeyword = 117,
  AsKeyword = 118,
  AnyKeyword = 119,
  AsyncKeyword = 120,
  AwaitKeyword = 121,
  BooleanKeyword = 122,
  ConstructorKeyword = 123,
  DeclareKeyword = 124,
  GetKeyword = 125,
  InferKeyword = 126,
  IsKeyword = 127,
  KeyOfKeyword = 128,
  ModuleKeyword = 129,
  NamespaceKeyword = 130,
  NeverKeyword = 131,
  ReadonlyKeyword = 132,
  RequireKeyword = 133,
  NumberKeyword = 134,
  ObjectKeyword = 135,
  SetKeyword = 136,
  StringKeyword = 137,
  SymbolKeyword = 138,
  TypeKeyword = 139,
  UndefinedKeyword = 140,
  UniqueKeyword = 141,
  UnknownKeyword = 142,
  FromKeyword = 143,
  GlobalKeyword = 144,
  OfKeyword = 145,
  QualifiedName = 146,
  ComputedPropertyName = 147,
  TypeParameter = 148,
  Parameter = 149,
  Decorator = 150,
  PropertySignature = 151,
  PropertyDeclaration = 152,
  MethodSignature = 153,
  MethodDeclaration = 154,
  Constructor = 155,
  GetAccessor = 156,
  SetAccessor = 157,
  CallSignature = 158,
  ConstructSignature = 159,
  IndexSignature = 160,
  TypePredicate = 161,
  TypeReference = 162,
  FunctionType = 163,
  ConstructorType = 164,
  TypeQuery = 165,
  TypeLiteral = 166,
  ArrayType = 167,
  TupleType = 168,
  OptionalType = 169,
  RestType = 170,
  UnionType = 171,
  IntersectionType = 172,
  ConditionalType = 173,
  InferType = 174,
  ParenthesizedType = 175,
  ThisType = 176,
  TypeOperator = 177,
  IndexedAccessType = 178,
  MappedType = 179,
  LiteralType = 180,
  ImportType = 181,
  ObjectBindingPattern = 182,
  ArrayBindingPattern = 183,
  BindingElement = 184,
  ArrayLiteralExpression = 185,
  ObjectLiteralExpression = 186,
  PropertyAccessExpression = 187,
  ElementAccessExpression = 188,
  CallExpression = 189,
  NewExpression = 190,
  TaggedTemplateExpression = 191,
  TypeAssertionExpression = 192,
  ParenthesizedExpression = 193,
  FunctionExpression = 194,
  ArrowFunction = 195,
  DeleteExpression = 196,
  TypeOfExpression = 197,
  VoidExpression = 198,
  AwaitExpression = 199,
  PrefixUnaryExpression = 200,
  PostfixUnaryExpression = 201,
  BinaryExpression = 202,
  ConditionalExpression = 203,
  TemplateExpression = 204,
  YieldExpression = 205,
  SpreadElement = 206,
  ClassExpression = 207,
  OmittedExpression = 208,
  ExpressionWithTypeArguments = 209,
  AsExpression = 210,
  NonNullExpression = 211,
  MetaProperty = 212,
  SyntheticExpression = 213,
  TemplateSpan = 214,
  SemicolonClassElement = 215,
  Block = 216,
  VariableStatement = 217,
  EmptyStatement = 218,
  ExpressionStatement = 219,
  IfStatement = 220,
  DoStatement = 221,
  WhileStatement = 222,
  ForStatement = 223,
  ForInStatement = 224,
  ForOfStatement = 225,
  ContinueStatement = 226,
  BreakStatement = 227,
  ReturnStatement = 228,
  WithStatement = 229,
  SwitchStatement = 230,
  LabeledStatement = 231,
  ThrowStatement = 232,
  TryStatement = 233,
  DebuggerStatement = 234,
  VariableDeclaration = 235,
  VariableDeclarationList = 236,
  FunctionDeclaration = 237,
  ClassDeclaration = 238,
  InterfaceDeclaration = 239,
  TypeAliasDeclaration = 240,
  EnumDeclaration = 241,
  ModuleDeclaration = 242,
  ModuleBlock = 243,
  CaseBlock = 244,
  NamespaceExportDeclaration = 245,
  ImportEqualsDeclaration = 246,
  ImportDeclaration = 247,
  ImportClause = 248,
  NamespaceImport = 249,
  NamedImports = 250,
  ImportSpecifier = 251,
  ExportAssignment = 252,
  ExportDeclaration = 253,
  NamedExports = 254,
  ExportSpecifier = 255,
  MissingDeclaration = 256,
  ExternalModuleReference = 257,
  JsxElement = 258,
  JsxSelfClosingElement = 259,
  JsxOpeningElement = 260,
  JsxClosingElement = 261,
  JsxFragment = 262,
  JsxOpeningFragment = 263,
  JsxClosingFragment = 264,
  JsxAttribute = 265,
  JsxAttributes = 266,
  JsxSpreadAttribute = 267,
  JsxExpression = 268,
  CaseClause = 269,
  DefaultClause = 270,
  HeritageClause = 271,
  CatchClause = 272,
  PropertyAssignment = 273,
  ShorthandPropertyAssignment = 274,
  SpreadAssignment = 275,
  EnumMember = 276,
  SourceFile = 277,
  Bundle = 278,
  UnparsedSource = 279,
  InputFiles = 280,
  JSDocTypeExpression = 281,
  JSDocAllType = 282,
  JSDocUnknownType = 283,
  JSDocNullableType = 284,
  JSDocNonNullableType = 285,
  JSDocOptionalType = 286,
  JSDocFunctionType = 287,
  JSDocVariadicType = 288,
  JSDocComment = 289,
  JSDocTypeLiteral = 290,
  JSDocSignature = 291,
  JSDocTag = 292,
  JSDocAugmentsTag = 293,
  JSDocClassTag = 294,
  JSDocCallbackTag = 295,
  JSDocParameterTag = 296,
  JSDocReturnTag = 297,
  JSDocThisTag = 298,
  JSDocTypeTag = 299,
  JSDocTemplateTag = 300,
  JSDocTypedefTag = 301,
  JSDocPropertyTag = 302,
  SyntaxList = 303,
  NotEmittedStatement = 304,
  PartiallyEmittedExpression = 305,
  CommaListExpression = 306,
  MergeDeclarationMarker = 307,
  EndOfDeclarationMarker = 308,
  Count = 309,
  FirstAssignment = 58,
  LastAssignment = 70,
  FirstCompoundAssignment = 59,
  LastCompoundAssignment = 70,
  FirstReservedWord = 72,
  LastReservedWord = 107,
  FirstKeyword = 72,
  LastKeyword = 145,
  FirstFutureReservedWord = 108,
  LastFutureReservedWord = 116,
  FirstTypeNode = 161,
  LastTypeNode = 181,
  FirstPunctuation = 17,
  LastPunctuation = 70,
  FirstToken = 0,
  LastToken = 145,
  FirstTriviaToken = 2,
  LastTriviaToken = 7,
  FirstLiteralToken = 8,
  LastLiteralToken = 13,
  FirstTemplateToken = 13,
  LastTemplateToken = 16,
  FirstBinaryOperator = 27,
  LastBinaryOperator = 70,
  FirstNode = 146,
  FirstJSDocNode = 281,
  LastJSDocNode = 302,
  FirstJSDocTagNode = 292,
  LastJSDocTagNode = 302
}
