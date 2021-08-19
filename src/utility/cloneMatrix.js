export default function cloneMatrix(mSource) {
  const matrixClone = [...mSource];
  matrixClone.forEach((row, index) => {
    const rowClone = [...row];
    matrixClone[index] = rowClone;
  });
  return matrixClone;
}
