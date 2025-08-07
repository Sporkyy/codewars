// const Test = require('@codewars/test-compat');

// function assertFuzzy(m, expect, msg="") {
//     // max error
//     let merr = 1e-12;
//     console.log("Testing ", +m);
//     let actual = solve(m);
//     console.log("Actual " + actual.toExponential(12));
//     console.log("Expect " + expect.toExponential(12))
//     let inrange = Math.abs(actual - expect) <= merr;
//     if (inrange === false) {
//         msg = "Expected value near: " +expect.toExponential(12) +", got: " +actual.toExponential(12);
//         console.log(msg);
//     }
//     console.log("#");
//     Test.expect(inrange, "Error");
// }

// describe("solve",function() {
// it("Basic tests",function() {
//     assertFuzzy(2.00, 5.000000000000e-01);
//     assertFuzzy(4.00, 6.096117967978e-01);
//     assertFuzzy(5.00, 6.417424305044e-01);
// })})
