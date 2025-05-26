export default function FontTest() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Inter Font (Default Sans)</h2>
        <p className="font-sans text-lg">The quick brown fox jumps over the lazy dog.</p>
        <p className="font-sans font-medium text-lg">The quick brown fox jumps over the lazy dog. (Medium)</p>
        <p className="font-sans font-semibold text-lg">The quick brown fox jumps over the lazy dog. (Semibold)</p>
        <p className="font-sans font-bold text-lg">The quick brown fox jumps over the lazy dog. (Bold)</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Poppins Font</h2>
        <p className="font-poppins text-lg">The quick brown fox jumps over the lazy dog.</p>
        <p className="font-poppins font-medium text-lg">The quick brown fox jumps over the lazy dog. (Medium)</p>
        <p className="font-poppins font-semibold text-lg">The quick brown fox jumps over the lazy dog. (Semibold)</p>
        <p className="font-poppins font-bold text-lg">The quick brown fox jumps over the lazy dog. (Bold)</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Roboto Font</h2>
        <p className="font-roboto text-lg">The quick brown fox jumps over the lazy dog.</p>
        <p className="font-roboto font-medium text-lg">The quick brown fox jumps over the lazy dog. (Medium)</p>
        <p className="font-roboto font-semibold text-lg">The quick brown fox jumps over the lazy dog. (Semibold)</p>
        <p className="font-roboto font-bold text-lg">The quick brown fox jumps over the lazy dog. (Bold)</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Mono Font</h2>
        <p className="font-mono text-lg">The quick brown fox jumps over the lazy dog.</p>
        <p className="font-mono font-medium text-lg">The quick brown fox jumps over the lazy dog. (Medium)</p>
        <p className="font-mono font-bold text-lg">The quick brown fox jumps over the lazy dog. (Bold)</p>
      </div>
    </div>
  )
}
