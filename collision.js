//@ sourceURL=collision.js

/**
 * Given two sets while the first one showing all equals and the second one unequal.
 * Find out if there exist a collision between the two sets.
 * For example, given "A=B,B=C" and "A!=B", return false as there is a collision.
 
 *** ideas:
 * Using a hash that's indexed by "A" or "B" and valued by its set,
 * Elements that's "equal" should always be within the same set.
 
 */
var collision = function(eqStr, uneqStr) {
    var eq = eqStr.split(","),
        uneq = uneqStr.split(","),
        setHash = {},
        elems;
    
    for (var i in eq) {
        elems = eq[i].split("=");
        setHash[elems[0]] = setHash[elems[0]] || setHash[elems[1]] || {};            
        setHash[elems[0]][elems[0]] = 1;
        setHash[elems[0]][elems[1]] = 1;
        setHash[elems[1]] = setHash[elems[0]];
    }
    
    for (var i in uneq) {
        elems = uneq[i].split("!=");
        if (setHash[elems[0]] && setHash[elems[0]][elems[1]]) return false;
    }
    
    return true;
}
/** test cases:

collesion("A=B,B=C,C=D", "A!=B"); // false
collesion("A=B,B=C,E=D", "A!=E"); // true

*/