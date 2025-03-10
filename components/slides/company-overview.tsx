import { Building, Calendar, MapPin, CrossIcon as MedicalCross } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompanyOverview() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Company Overview</h2>
        <p className="text-muted-foreground mt-2">Klíníkin Ármúla ehf. - A Leading Healthcare Provider in Iceland</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Company Profile</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">About</h3>
                <p className="text-sm text-muted-foreground">
                  Klíníkin Ármúla ehf. is a private healthcare provider in Iceland, offering specialized medical
                  services and elective surgeries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Ármúla, Reykjavík, Iceland</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Key Highlights</CardTitle>
            <MedicalCross className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="rounded-full bg-primary/10 p-1 text-primary">
                  <Calendar className="h-3 w-3" />
                </span>
                <span>Established healthcare provider with strong growth trajectory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="rounded-full bg-primary/10 p-1 text-primary">
                  <Calendar className="h-3 w-3" />
                </span>
                <span>Revenue growth of 130% from 2020 to 2023</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="rounded-full bg-primary/10 p-1 text-primary">
                  <Calendar className="h-3 w-3" />
                </span>
                <span>Turned profitable in 2021 after COVID-19 impact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="rounded-full bg-primary/10 p-1 text-primary">
                  <Calendar className="h-3 w-3" />
                </span>
                <span>Expanding facilities with completion expected in 2025</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company Timeline</CardTitle>
          <CardDescription>Key milestones in the company's recent history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-bold">2020</span>
                </div>
                <div className="h-full w-px bg-border"></div>
              </div>
              <div className="ml-4 space-y-1 pb-8">
                <p className="text-sm font-medium">COVID-19 Impact</p>
                <p className="text-sm text-muted-foreground">
                  Elective surgeries halted for 6 weeks, leading to revenue loss and financial challenges.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-bold">2021</span>
                </div>
                <div className="h-full w-px bg-border"></div>
              </div>
              <div className="ml-4 space-y-1 pb-8">
                <p className="text-sm font-medium">Recovery & Growth</p>
                <p className="text-sm text-muted-foreground">
                  Strong recovery with 63 million ISK profit. Assisted the National Hospital during COVID-19.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-bold">2022</span>
                </div>
                <div className="h-full w-px bg-border"></div>
              </div>
              <div className="ml-4 space-y-1 pb-8">
                <p className="text-sm font-medium">Peak Performance</p>
                <p className="text-sm text-muted-foreground">
                  Best financial year with 216.6 million ISK profit. Signed expansion agreement with Reitir.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-bold">2023</span>
                </div>
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium">Continued Growth</p>
                <p className="text-sm text-muted-foreground">
                  Revenue continued growing to 2.81 billion ISK. Ongoing expansion construction.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

