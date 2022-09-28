/*
Evaluate an expression tree
Using recursive method

EXTENSION
include variables in your expressions

For visualisation of tree see:
https://jamboard.google.com/d/1d-h0UpzcNi48h67pgV7tBq98oabF2Wmon-n0KVPgArM/edit?usp=sharing

*/

type Operator = 'subtract' | 'multiply' | 'add' | 'divide';

type Expression = 
  number 
  | {op : Operator; a : Expression; b : Expression;}

export function evaluateTree(expression : Expression):number {
  return 42
}