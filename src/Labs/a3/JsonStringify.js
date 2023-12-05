function JsonStringify() {
  // body
  const squares = [1, 4, 16, 25, 36];

  // return vaiue
  return (
    <div>
      <h2>JsonStringify</h2>
      squares = {JSON.stringify(squares)} <br />
    </div>
  );
}
export default JsonStringify;
