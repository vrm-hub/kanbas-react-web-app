function ArrayIndexAndLength() {
  // body
  let numberArray1 = [1, 2, 3, 4, 5];
  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);
  // return vaiue
  return (
    <div>
      <h2>ArrayIndexAndLength</h2>
      length1 = {length1} <br />
      index1 = {index1} <br />
    </div>
  );
}
export default ArrayIndexAndLength;
