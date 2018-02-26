/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var lovers = preferences;
  var lover = { A: {}, B: {}, C: {} };
  var triangleCount = 0;

  for (var i = 0; i < lovers.length; i++) {
    
    lover["A"].index = i;
    lover["A"].inLoveWith = lovers[i] - 1;
    if (i == lover["A"].inLoveWith) {continue;};

    lover["B"].index = lover["A"].inLoveWith;
    lover["B"].inLoveWith = lovers[lover["B"].index] - 1;
    if (lover["B"].index == lover["B"].inLoveWith) {continue;};

    lover["C"].index = lover["B"].inLoveWith;
    lover["C"].inLoveWith = lovers[lover["C"].index] - 1;
    if (lover["C"].index == lover["C"].inLoveWith) {continue;};

    if (lover["A"].index == lover["C"].inLoveWith) {
      triangleCount++;
    }
    
  }
  return triangleCount/3;  
};
