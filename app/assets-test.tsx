import { DockerLogo } from "@/components/logo"
import { ContainerIllustration } from "@/components/illustrations"

export default function AssetsTest() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Docker Assets Test</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Docker Logo Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <DockerLogo size="lg" variant="default" color="primary" />
              <p className="mt-2 text-sm">Default (Primary)</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="lg" variant="mono" color="foreground" />
              <p className="mt-2 text-sm">Mono (Foreground)</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="lg" variant="outline" color="primary" />
              <p className="mt-2 text-sm">Outline (Primary)</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Docker Logo Sizes</h2>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center">
              <DockerLogo size="sm" />
              <p className="mt-2 text-sm">Small</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="md" />
              <p className="mt-2 text-sm">Medium</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="lg" />
              <p className="mt-2 text-sm">Large</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="xl" />
              <p className="mt-2 text-sm">Extra Large</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Docker Logo Colors</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center">
              <DockerLogo size="md" color="primary" />
              <p className="mt-2 text-sm">Primary</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="md" color="secondary" />
              <p className="mt-2 text-sm">Secondary</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="md" color="accent" />
              <p className="mt-2 text-sm">Accent</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="md" color="muted" />
              <p className="mt-2 text-sm">Muted</p>
            </div>
            <div className="flex flex-col items-center">
              <DockerLogo size="md" color="foreground" />
              <p className="mt-2 text-sm">Foreground</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Container Illustrations</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <ContainerIllustration size="md" />
              <p className="mt-2 text-sm">Default Colors</p>
            </div>
            <div className="flex flex-col items-center">
              <ContainerIllustration
                size="md"
                primaryColor="hsl(var(--destructive))"
                secondaryColor="hsl(var(--muted))"
              />
              <p className="mt-2 text-sm">Custom Colors</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4 mb-4">
              <DockerLogo size="md" color="primary" />
              <h3 className="text-xl font-semibold">Docker Container Management</h3>
            </div>
            <p className="mb-6">
              Easily manage your Docker containers with our intuitive interface. Monitor, start, stop, and deploy
              containers with just a few clicks.
            </p>
            <div className="flex justify-center">
              <ContainerIllustration size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
