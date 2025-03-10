import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, Hourglass, X } from "lucide-react"

export default function BusinessDevelopments() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Business Developments</h2>
        <p className="text-muted-foreground mt-2">Key Events and Milestones (2020-2023)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>2020-2021: Recovery from COVID-19</CardTitle>
            <CardDescription>Navigating the pandemic challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-destructive/20 p-1 text-destructive">
                  <X className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">COVID-19 Impact</p>
                  <p className="text-sm text-muted-foreground">
                    Elective surgeries halted for 6 weeks, leading to significant revenue loss.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-destructive/20 p-1 text-destructive">
                  <X className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Financial Loss</p>
                  <p className="text-sm text-muted-foreground">Recorded a loss of ISK 1.5 million in 2020.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">National Hospital Assistance</p>
                  <p className="text-sm text-muted-foreground">
                    Assisted Landspítali (National Hospital) during COVID-19 crisis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Financial Recovery</p>
                  <p className="text-sm text-muted-foreground">
                    Turned profitable in 2021 with ISK 63 million in profit.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2022-2023: Growth and Expansion</CardTitle>
            <CardDescription>Strategic investments and financial strength</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Peak Financial Performance</p>
                  <p className="text-sm text-muted-foreground">
                    Best financial year in 2022 with ISK 216.6 million in profit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Expansion Agreement</p>
                  <p className="text-sm text-muted-foreground">
                    Signed expansion agreement with Reitir to increase facility size.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-primary/20 p-1 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Debt Elimination</p>
                  <p className="text-sm text-muted-foreground">Fully repaid all long-term debt by 2022.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-amber-500/20 p-1 text-amber-500">
                  <Clock className="h-3 w-3" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Ongoing Construction</p>
                  <p className="text-sm text-muted-foreground">
                    Expansion construction in progress, expected completion in 2025.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Timeline</CardTitle>
          <CardDescription>Key business developments and future milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border"></div>
            <ol className="space-y-6">
              <li className="ml-8">
                <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">2020: COVID-19 Impact</span>
                  <span className="text-sm text-muted-foreground">
                    Operations disrupted by pandemic, resulting in financial loss.
                  </span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">2021: Financial Recovery</span>
                  <span className="text-sm text-muted-foreground">
                    Returned to profitability with ISK 63 million profit.
                  </span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">2022: Peak Performance & Expansion Plans</span>
                  <span className="text-sm text-muted-foreground">
                    Record profit of ISK 216.6 million. Signed facility expansion agreement.
                  </span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">2023: Continued Growth</span>
                  <span className="text-sm text-muted-foreground">
                    Revenue growth to ISK 2.81 billion with ISK 115.9 million profit.
                  </span>
                </div>
              </li>
              <li className="ml-8">
                <div className="absolute -left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                  <Hourglass className="h-3 w-3 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">2025: Facility Expansion Completion</span>
                  <span className="text-sm text-muted-foreground">
                    Expected completion of expanded facilities, increasing service capacity.
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

