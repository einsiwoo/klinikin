import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Shareholders() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Shareholders</h2>
        <p className="text-muted-foreground mt-2">Ownership Structure (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Shareholder Count</CardTitle>
            <CardDescription>Number of shareholders by year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="rounded-lg border p-3 text-center">
                  <div className="text-2xl font-bold">32</div>
                  <div className="text-xs text-muted-foreground">2020</div>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <div className="text-2xl font-bold">26</div>
                  <div className="text-xs text-muted-foreground">2021</div>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-xs text-muted-foreground">2022</div>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-xs text-muted-foreground">2023</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                The number of shareholders has decreased from 32 in 2020 to 24 in 2023, indicating a consolidation of
                ownership.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ownership Structure</CardTitle>
            <CardDescription>Concentration of ownership</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="h-40 w-40 rounded-full border-8 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">24</div>
                    <div className="text-sm">Shareholders</div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                The company has a relatively concentrated ownership structure with 24 shareholders as of 2023.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Major Shareholders</CardTitle>
          <CardDescription>Key stakeholders in the company</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shareholder</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Brjóstamiðstöðin slf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reykjavíkurhús ehf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sveins AB</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MedFred slf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Blunda ehf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ment2Move ehf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lýtalæknastöðin ehf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">E-gas slf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EKL ehf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pegá ehf.</TableCell>
                <TableCell>Corporate</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The company's ownership structure includes several corporate entities, many of which appear to be related
              to the healthcare sector, suggesting strategic alignment with the company's core business.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

