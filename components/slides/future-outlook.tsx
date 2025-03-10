import { ArrowUpRight, Building, LineChart, TrendingUp, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FutureOutlook() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Future Outlook</h2>
        <p className="text-muted-foreground mt-2">Growth Strategy and Projections</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Facility Expansion</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2025</div>
            <p className="text-xs text-muted-foreground">Completion Year</p>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-muted-foreground">Increased Capacity</span>
              <ArrowUpRight className="ml-1 h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10-15%</div>
            <p className="text-xs text-muted-foreground">Projected Annual Growth</p>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-muted-foreground">Expanding Services</span>
              <TrendingUp className="ml-1 h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workforce</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45+</div>
            <p className="text-xs text-muted-foreground">Projected Staff by 2025</p>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-muted-foreground">Talent Acquisition</span>
              <ArrowUpRight className="ml-1 h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Growth Initiatives</CardTitle>
          <CardDescription>Key focus areas for future growth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">Facility Expansion</h3>
                <p className="text-sm text-muted-foreground">
                  The ongoing expansion with Reitir, set to complete in 2025, will significantly increase service
                  capacity and enable the company to meet growing demand.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Service Diversification</h3>
                <p className="text-sm text-muted-foreground">
                  Plans to expand service offerings and medical specialties to capture additional market segments and
                  increase revenue streams.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Operational Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on improving operational efficiency to address the profit margin decline seen in 2023, with
                  targeted initiatives to optimize costs while maintaining quality.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Strategic Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Building on the successful collaboration with the National Hospital during COVID-19, the company aims
                  to establish additional strategic partnerships.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Investment Opportunity</CardTitle>
          <CardDescription>Why invest in Klíníkin Ármúla ehf.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Strong Financial Foundation</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Revenue growth of 130% from 2020 to 2023</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Equity ratio improved from negative to 49.3%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Zero long-term debt since 2022</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Strong cash position of ISK 250.2M in 2023</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Growth Potential</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Facility expansion set to complete in 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Growing healthcare demand in Iceland</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Opportunities for service diversification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <span>Strategic partnerships with healthcare institutions</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

