export default function TypographyTest() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">This H1 should be Poppins</h1>
        <h2 className="text-3xl font-semibold mb-3">This H2 should be Poppins</h2>
        <h3 className="text-2xl font-medium mb-2">This H3 should be Poppins</h3>
        <p className="text-lg">This body text should be Inter font family.</p>
        <p className="text-base">Regular paragraph text in Inter.</p>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Font Family Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Heading Font (Poppins)</h3>
            <div className="space-y-1">
              <p className="font-heading font-normal">Poppins Regular</p>
              <p className="font-heading font-medium">Poppins Medium</p>
              <p className="font-heading font-semibold">Poppins SemiBold</p>
              <p className="font-heading font-bold">Poppins Bold</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Body Font (Inter)</h3>
            <div className="space-y-1">
              <p className="font-normal">Inter Regular</p>
              <p className="font-medium">Inter Medium</p>
              <p className="font-bold">Inter Bold</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border p-4 rounded bg-muted mt-8">
        <h3 className="font-semibold mb-2">CSS Variables:</h3>
        <ul className="text-sm space-y-1">
          <li>
            <code>--font-family-sans: Inter, ...</code> (Body text)
          </li>
          <li>
            <code>--font-family-heading: Poppins, ...</code> (Headings)
          </li>
          <li>
            <code>--border-radius: 0.25rem</code> (4px)
          </li>
          <li>
            <code>--border-width: 0.125rem</code> (2px)
          </li>
        </ul>
      </div>
    </div>
  )
}
