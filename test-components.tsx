import Button from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card"

const TestComponents = () => {
  return (
    <div>
      <Button>Test Button</Button>
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>A simple card component.</CardDescription>
        </CardHeader>
        <CardContent>This is the content of the card.</CardContent>
      </Card>
    </div>
  )
}

export default TestComponents
