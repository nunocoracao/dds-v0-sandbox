export default function RadiusTest() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Border Radius Test (4px base token)</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-4 rounded-sm bg-secondary">
          <p className="text-sm font-medium">rounded-sm</p>
          <p className="text-xs text-muted-foreground">4px (base token)</p>
        </div>

        <div className="border p-4 rounded bg-secondary">
          <p className="text-sm font-medium">rounded (default)</p>
          <p className="text-xs text-muted-foreground">4px (base token)</p>
        </div>

        <div className="border p-4 rounded-md bg-secondary">
          <p className="text-sm font-medium">rounded-md</p>
          <p className="text-xs text-muted-foreground">8px (2x token)</p>
        </div>

        <div className="border p-4 rounded-lg bg-secondary">
          <p className="text-sm font-medium">rounded-lg</p>
          <p className="text-xs text-muted-foreground">12px (3x token)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Component Examples</h2>

        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded bg-primary text-primary-foreground">
            Button with 4px radius
          </button>

          <input type="text" placeholder="Input with 4px radius" className="border px-3 py-2 rounded" />
        </div>

        <div className="border rounded p-6 bg-card">
          <h3 className="text-lg font-semibold mb-2">Card with 4px radius</h3>
          <p className="text-muted-foreground">This card uses your 4px border radius token.</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-muted rounded">
        <h3 className="font-semibold mb-2">Token Values:</h3>
        <ul className="text-sm space-y-1">
          <li>
            <code>--border-radius: 0.25rem</code> (4px base token)
          </li>
          <li>
            <code>rounded-sm: 0.25rem</code> (4px)
          </li>
          <li>
            <code>rounded: 0.25rem</code> (4px)
          </li>
          <li>
            <code>rounded-md: 0.5rem</code> (8px - 2x token)
          </li>
          <li>
            <code>rounded-lg: 0.75rem</code> (12px - 3x token)
          </li>
        </ul>
      </div>
    </div>
  )
}
