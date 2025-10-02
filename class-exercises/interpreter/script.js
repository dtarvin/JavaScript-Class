function tokenize(input) {
  console.log(`Entering tokenize()`);
  return input
    .split(/(\s+|let|=|;|\+|\d|\w+)/)
    .filter(t => t && !t.match(/^\s+$/));
}

function parse(tokens) {
  // console.log(`Entering parse()`);
  let i = 0;
  // console.log(`i: ${i}`);
  const ast = [];
  // console.log(`ast: ${ast}`);

  function walk() {
    // console.log(`Entering walk()`);
    let token = tokens[i];
    // console.log(`token: ${token}`);

    if (token === "let") {
      // console.log(`skip 'let'`);
      i++; // skip 'let'
      // console.log(`i: ${i}`);
      const name = tokens[i++];
      // console.log(`name: ${name}, i: ${i}`);
      // console.log(`tokens[i]: ${tokens[i]}`);
      // console.log(`skip '='`);
      i++; // skip '='
      // console.log(`i: ${i}`);
      // console.log(`tokens[i]: ${tokens[i]}`);
      const value = { type: "Literal", value: Number(tokens[i++]) };
      // console.log(`value: ${JSON.stringify(value)}`);
      // console.log(`i: ${i}`);
      // console.log(`tokens[i]: ${tokens[i]}`);
      // console.log(`skip ';'`);
      i++; // skip ';'
      // console.log(`i: ${i}`);
      // const returnedValue = { type: "VariableDeclaration", name, value };
      return { type: "VariableDeclaration", name, value };
      // console.log(`returnedValue: ${JSON.stringify(returnedValue)}`);
      // return returnedValue;
    }

    // console.log(`tokens[i]: ${tokens[i]}`);
    const left = { type: "Identifier", name: tokens[i++] };
    // console.log(`left: ${JSON.stringify(left)}, i: ${i}`);
    const op = tokens[i++];
    // console.log(`op: ${op}, i: ${i}`);
    const right = { type: "Literal", value: Number(tokens[i++]) };
    // console.log(`right: ${JSON.stringify(right)}`);
    // console.log(`i: ${i}`);
    // console.log(`tokens[i]: ${tokens[i]}`);
    // console.log(`skip ';'`);
    i++; // skip ';'
    // console.log(`i: ${i}`);
    // const secondReturnedValue = { type: "BinaryExpression", left, operator: op, right };
    return { type: "BinaryExpression", left, operator: op, right };
    // console.log(`secondReturnedValue: ${JSON.stringify(secondReturnedValue)}`);
  }

  // console.log(`before while loop, i: ${i}, tokens.length: ${tokens.length}`);
  while (i < tokens.length) {
    // console.log(`in while loop, i: ${i}`);
    ast.push(walk());
    // console.log(`in while loop, ast: ${JSON.stringify(ast)}`);
  }
  // console.log(`after while loop, ast: ${JSON.stringify(ast)}`);

  return ast;
}

const code = 'let x = 5; x + 2;';

const tokens = (tokenize(code));
console.log(`tokens: ${tokens}`);
const ast = parse(tokens);
console.log(`ast: ${JSON.stringify(ast)}`);