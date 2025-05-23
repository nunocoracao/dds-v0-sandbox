"use client"

export default function AssetTest() {
  // Let's test the exact file paths from your repository
  const testPaths = [
    "/components/logo/LogoPrimary.svg",
    "/components/logo/LogoBlack.svg",
    "/components/logo/LogoWhite.svg",
    "/components/sub-marks/subMarkPrimary.svg",
    "/components/sub-marks/subMarkBlack.svg",
    "/components/sub-marks/subMarkWhite.svg",
    "/components/app icons/Primary.svg",
    "/components/app icons/Secondary.svg",
    "/components/app icons/Tertiary.svg",
    "/components/illustrations/Product Illustration/Lg/Folder w Docs.png",
    "/components/illustrations/Product Illustration/Lg/List w Users.png",
    "/components/illustrations/Product Illustration/Lg/Mock Panels.png",
    "/components/illustrations/Product Illustration/Md/List Panel.png",
    "/components/illustrations/Product Illustration/Md/Mock Panels.png",
    "/components/illustrations/Product Illustration/Md/Option Select.png",
    "/components/illustrations/Product Illustration/Sm/Run Image.png",
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Asset Path Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testPaths.map((path, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="text-xs mb-2 break-all">{path}</p>
            <img
              src={path || "/placeholder.svg"}
              alt={`Test ${index}`}
              className="w-16 h-16 object-contain border"
              onError={(e) => {
                console.log(`Failed to load: ${path}`)
                e.currentTarget.style.border = "2px solid red"
              }}
              onLoad={() => {
                console.log(`Successfully loaded: ${path}`)
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Alternative Path Test</h2>
        <p className="mb-4">Testing if files need to be served from public directory:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <p className="text-xs mb-2">Direct SVG content test</p>
            <div className="w-16 h-16 border bg-gray-100 flex items-center justify-center">
              <span className="text-xs">SVG Test</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
