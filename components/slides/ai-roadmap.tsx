import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Flag, Rocket, Target } from "lucide-react"

export default function AIRoadmap() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ása AI Implementation Roadmap</h2>
        <p className="text-muted-foreground mt-2">Step-by-Step Plan for Successful AI Integration</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <CardTitle>Objective</CardTitle>
          </div>
          <CardDescription>The primary goal of Ása AI implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Seamlessly integrate Ása AI Healthcare into Klíníkin Ármúla's operations to enhance efficiency, patient
            prioritization, and financial sustainability while maintaining high-quality patient care.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                1
              </div>
              <CardTitle>Phase 1: AI Pilot Testing (0-6 Months)</CardTitle>
            </div>
            <CardDescription>
              Validate Ása AI's impact on patient triage, documentation, and scheduling efficiency before full
              deployment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 1: Select a Pilot Department (Month 1)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Choose one high-traffic department (e.g., general consultations or surgery intake)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>
                      Set key performance indicators (KPIs) for AI testing:
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>- Average patient wait time before and after AI</li>
                        <li>- Doctor time spent on documentation</li>
                        <li>- Increase in daily patient throughput</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 2: AI Training & Integration (Months 1-2)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Ása AI customization for Klíníkin's patient flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Train AI on Klíníkin Ármúla's specific patient intake data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Ensure full compliance with Icelandic healthcare regulations</span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 3: Train Staff on AI Usage (Month 3)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>
                      Conduct workshops for doctors and nurses:
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>- How to interpret AI-generated medical histories</li>
                        <li>- Best practices for AI-assisted triage</li>
                        <li>- Address concerns about AI bias & accuracy</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 4: Live Pilot Test (Months 4-6)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Deploy Ása AI for real-time patient triage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Use a control group for comparison (AI vs. traditional intake)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Collect feedback from staff & patients</span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 5: Analyze Results & Adjustments (Month 6)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>
                      Assess AI's impact on efficiency:
                      <ul className="ml-4 mt-1 space-y-1">
                        <li className="flex items-center gap-1">
                          <Check className="h-3 w-3 text-primary" />
                          <span>20-40% reduction in administrative workload</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className="h-3 w-3 text-primary" />
                          <span>15-20% reduction in patient wait times</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className="h-3 w-3 text-primary" />
                          <span>Improved doctor efficiency & patient satisfaction</span>
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Fine-tune AI algorithms based on findings</span>
                  </li>
                </ul>
                <div className="mt-3 rounded-md bg-primary/10 p-2 text-sm font-medium text-primary">
                  <Check className="mr-1 inline-block h-4 w-4" />
                  Go/No-Go Decision for Full Implementation!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                2
              </div>
              <CardTitle>Phase 2: Full AI Integration (6-12 Months)</CardTitle>
            </div>
            <CardDescription>Scale Ása AI across all departments and patient interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 6: Expand AI to More Departments (Month 7-8)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Include surgical scheduling & inpatient triage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Link AI to the hospital's electronic medical records (EMR) for seamless data access</span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 7: AI-Powered Surgical Scheduling (Month 8-9)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Automate surgery prioritization based on urgency & doctor availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Optimize operating room usage (reducing downtime by 5-10%)</span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">
                  Step 8: Launch AI-Generated Post-Op Monitoring (Month 10-11)
                </h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Enable AI to track recovery data and predict post-op complications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Patients receive automated post-op check-ins via Ása AI</span>
                  </li>
                </ul>
                <div className="mt-3 rounded-md bg-primary/10 p-2 text-sm font-medium text-primary">
                  <Check className="mr-1 inline-block h-4 w-4" />
                  By Month 12, AI should be fully embedded in daily hospital operations!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                3
              </div>
              <CardTitle>Phase 3: AI-Powered Telemedicine (12-18 Months)</CardTitle>
            </div>
            <CardDescription>
              Introduce virtual AI-powered consultations to reduce unnecessary in-person visits & expand services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">
                  Step 9: Launch AI-Assisted Remote Consultations (Month 12-14)
                </h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Patients describe symptoms via Ása AI before visiting the clinic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>AI automatically determines if an in-person visit is required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Reduces unnecessary visits by 20-30%</span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">Step 10: Develop AI-Powered Home Monitoring (Month 14-16)</h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>AI tracks patient symptoms remotely (especially post-op recovery)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>Alerts doctors if critical symptoms arise → Enables faster interventions</span>
                  </li>
                </ul>
                <div className="mt-3 rounded-md bg-primary/10 p-2 text-sm font-medium text-primary">
                  <Check className="mr-1 inline-block h-4 w-4" />
                  Expected Savings: 10-15% reduction in hospital visits & staffing costs!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                4
              </div>
              <CardTitle>Phase 4: AI-Driven Expansion (18+ Months)</CardTitle>
            </div>
            <CardDescription>
              Use AI insights to optimize the 2025 facility expansion and introduce AI-powered preventive healthcare
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative border-l-2 border-muted pl-6 pb-1">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">
                  Step 11: Optimize Expansion Strategy Using AI (Months 18-20)
                </h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>
                      Use AI-driven patient demand forecasting to determine:
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>- Which specialties & departments need more capacity</li>
                        <li>- Optimal allocation of new surgical & inpatient resources</li>
                      </ul>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative border-l-2 border-muted pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-base font-semibold">
                  Step 12: Introduce AI-Driven Preventive Healthcare (Months 20-24)
                </h3>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>AI analyzes patient histories to predict chronic diseases early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>
                      Launch personalized preventive health programs → Long-term cost savings & patient well-being
                    </span>
                  </li>
                </ul>
                <div className="mt-3 rounded-md bg-primary/10 p-2 text-sm font-medium text-primary">
                  <Check className="mr-1 inline-block h-4 w-4" />
                  Position Klíníkin Ármúla as the first AI-driven preventive care center in Iceland!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Flag className="h-5 w-5 text-primary" />
            <CardTitle>Long-Term Vision: Klíníkin Ármúla as Iceland's AI-Powered Healthcare Leader</CardTitle>
          </div>
          <CardDescription>By 2026, Klíníkin Ármúla will achieve these milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <p className="font-medium">First AI-driven private hospital in Iceland</p>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <p className="font-medium">Reduced operational costs by 10-20% via AI efficiencies</p>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <p className="font-medium">Processing 20-30% more patients daily with faster & smarter triage</p>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <p className="font-medium">Leveraging AI to offer remote consultations & predictive healthcare</p>
              </div>
            </div>
            <div className="rounded-lg border p-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <p className="font-medium">Iceland's model hospital for AI-enhanced surgical & post-op care</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <CardTitle>Final Recommendation</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                1
              </div>
              <p className="text-base font-medium">Start AI pilot testing ASAP (within the next 3-6 months)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                2
              </div>
              <p className="text-base font-medium">Monitor AI's impact on efficiency & patient experience</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                3
              </div>
              <p className="text-base font-medium">Scale AI-powered scheduling & diagnostics by mid-2025</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                4
              </div>
              <p className="text-base font-medium">Leverage AI insights for Klíníkin Ármúla's 2025 expansion</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

