import { DockerLogo, DockerSubmark } from "@/components/logo"
import { AppIcon } from "@/components/icons"
import { ProductIllustration } from "@/components/illustrations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssetsShowcase() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Docker Design System Assets</h1>

      <Tabs defaultValue="logos" className="mb-12">
        <TabsList className="mb-6">
          <TabsTrigger value="logos">Logos</TabsTrigger>
          <TabsTrigger value="submarks">Submarks</TabsTrigger>
          <TabsTrigger value="app-icons">App Icons</TabsTrigger>
          <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
        </TabsList>

        {/* Logos Section */}
        <TabsContent value="logos" className="space-y-8">
          <h2 className="text-2xl font-semibold">Docker Logos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Logo</CardTitle>
                <CardDescription>For use on light backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <DockerLogo variant="primary" size="xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Black Logo</CardTitle>
                <CardDescription>For use on light colored backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <DockerLogo variant="black" size="xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>White Logo</CardTitle>
                <CardDescription>For use on dark backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-800 rounded-md">
                <DockerLogo variant="white" size="xl" />
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mt-8">Logo Sizes</h3>
          <div className="flex items-end gap-8 p-6 bg-gray-100 rounded-md">
            <div className="flex flex-col items-center">
              <DockerLogo variant="primary" size="sm" />
              <span className="mt-2 text-sm">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo variant="primary" size="md" />
              <span className="mt-2 text-sm">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo variant="primary" size="lg" />
              <span className="mt-2 text-sm">Large</span>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo variant="primary" size="xl" />
              <span className="mt-2 text-sm">Extra Large</span>
            </div>
          </div>
        </TabsContent>

        {/* Submarks Section */}
        <TabsContent value="submarks" className="space-y-8">
          <h2 className="text-2xl font-semibold">Docker Submarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Submark</CardTitle>
                <CardDescription>For use on light backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <DockerSubmark variant="primary" size="xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Black Submark</CardTitle>
                <CardDescription>For use on light colored backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <DockerSubmark variant="black" size="xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>White Submark</CardTitle>
                <CardDescription>For use on dark backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-800 rounded-md">
                <DockerSubmark variant="white" size="xl" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* App Icons Section */}
        <TabsContent value="app-icons" className="space-y-8">
          <h2 className="text-2xl font-semibold">App Icons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Icon</CardTitle>
                <CardDescription>Main application icon</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <AppIcon variant="primary" size="xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Icon</CardTitle>
                <CardDescription>Alternative application icon</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <AppIcon variant="secondary" size="xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tertiary Icon</CardTitle>
                <CardDescription>Third application icon variant</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <AppIcon variant="tertiary" size="xl" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Illustrations Section */}
        <TabsContent value="illustrations" className="space-y-8">
          <h2 className="text-2xl font-semibold">Product Illustrations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Folder with Documents</CardTitle>
                <CardDescription>Large illustration</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <ProductIllustration type="folder-docs" size="lg" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>List with Users</CardTitle>
                <CardDescription>Large illustration</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <ProductIllustration type="list-users" size="lg" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mock Panels</CardTitle>
                <CardDescription>Medium illustration</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <ProductIllustration type="mock-panels" size="md" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>List Panel</CardTitle>
                <CardDescription>Medium illustration</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <ProductIllustration type="list-panel" size="md" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Option Select</CardTitle>
                <CardDescription>Medium illustration</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <ProductIllustration type="option-select" size="md" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Run Image</CardTitle>
                <CardDescription>Small illustration</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6 bg-gray-100 rounded-md">
                <ProductIllustration type="run-image" size="sm" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <DockerLogo variant="primary" size="md" />
            <div>
              <CardTitle>Docker Dashboard</CardTitle>
              <CardDescription>Container management interface</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-gray-100 p-6 rounded-md flex flex-col items-center">
              <ProductIllustration type="mock-panels" size="md" />
              <p className="mt-4 text-center">Manage all your containers from a single dashboard</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <DockerSubmark variant="primary" size="md" />
            <div>
              <CardTitle>Docker Hub</CardTitle>
              <CardDescription>Container registry</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-gray-100 p-6 rounded-md flex flex-col items-center">
              <ProductIllustration type="list-users" size="md" />
              <p className="mt-4 text-center">Find and share container images with your team</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
