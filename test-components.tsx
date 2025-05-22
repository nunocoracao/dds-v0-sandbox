"use client"

import Button from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function TestComponents() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Testing DDS Components</h1>

      <div className="space-x-4">
        <Button>Default Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>

      <Card className="w-96">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a test card using the DDS components.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here. This tests if the components are working properly.</p>
        </CardContent>
      </Card>
    </div>
  )
}
