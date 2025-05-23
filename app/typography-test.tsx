export default function TypographyTest() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">This H1 should be Poppins</h1>
        <h2 className="text-3xl font-semibold mb-3">This H2 should be Poppins</h2>
        <h3 className="text-2xl font-medium mb-2">This H3 should be Poppins</h3>
        <p className="text-lg">This body text should be Inter font family.</p>
        <p className="text-base">Regular paragraph text in Inter.</p>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Token Mapping Test</h2>
        <div className="space-y-2">
          <p>
            <strong>Body font (Inter):</strong> Used for paragraphs, buttons, general text
          </p>
          <p>
            <strong>Heading font (Poppins):</strong> Used for h1, h2, h3, h4, h5, h6
          </p>
        </div>
      </div>
    </div>
  )
}
