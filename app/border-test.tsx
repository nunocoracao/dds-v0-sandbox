export default function BorderTest() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Border Width Test (2px)</h1>

      <div className="space-y-4">
        <div className="border p-4">This div has a 2px border on all sides</div>

        <div className="border-t p-4">This div has a 2px border on top only</div>

        <div className="border-b p-4">This div has a 2px border on bottom only</div>

        <div className="border-l p-4">This div has a 2px border on left only</div>

        <div className="border-r p-4">This div has a 2px border on right only</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border border-primary p-4">Primary border color</div>

          <div className="border border-destructive p-4">Destructive border color</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Font Test (Inter)</h2>
        <p className="text-lg mb-2">This text should be using the Inter font family.</p>
        <p className="font-medium mb-2">This is medium weight Inter.</p>
        <p className="font-bold">This is bold weight Inter.</p>
      </div>
    </div>
  )
}
