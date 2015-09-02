// sample start
// this should be changed
const a = 1;

// below two shouldn't
var keep = { const: 1 };
keep.const = 2;

// only function assignment should be changed
const foo = function () {
  console.log('cannot change me');
  console.log('some const s should be left unchanged');
};
// sample end
