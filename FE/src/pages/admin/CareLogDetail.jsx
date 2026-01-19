import { Link, useParams } from "react-router-dom";
import { ChevronLeft, CheckCircle, Send, AlertTriangle, Activity, Pill, UtensilsCrossed, PersonStanding, Clock, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const vitalSigns = [
  { label: "BLOOD PRESSURE", value: "145/92", status: "HIGH", statusColor: "bg-red-100 text-red-700", target: "Target: < 130/80 mmHg" },
  { label: "HEART RATE", value: "88", unit: "BPM", status: "STABLE", statusColor: "bg-green-100 text-green-700", target: "Resting range: 60-100" },
  { label: "SPO2 LEVEL", value: "97%", status: "OPTIMAL", statusColor: "bg-green-100 text-green-700", target: "Normal: 95% - 100%" },
];

const medications = [
  { name: "Lisinopril", dosage: "10mg", schedule: "Morning (08:00 AM)", status: "ADMINISTERED", statusColor: "text-green-600" },
  { name: "Metformin", dosage: "500mg", schedule: "Morning (08:00 AM)", status: "MISSED / REFUSED", statusColor: "text-red-600", highlight: true },
  { name: "Multivitamin", dosage: "1 Tablet", schedule: "Morning (08:00 AM)", status: "ADMINISTERED", statusColor: "text-green-600" },
];

const patientInfo = {
  name: "Robert Fox",
  age: "78 Years",
  gender: "Male",
  riskProfile: "HIGH RISK PROFILE",
  diagnoses: ["Hypertension", "Type 2 Diabetes", "Early Dementia"],
  emergencyContact: {
    name: "James Fox",
    relationship: "SON / PRIMARY GUARDIAN",
    phone: "+1 (555) 123-4567",
  },
};

const CareLogDetail = () => {
  const { id } = useParams();

  return (
    <div>
      {/* Breadcrumb Header */}
      <header className="h-14 bg-background border-b border-border flex items-center justify-between px-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/admin/reports" className="hover:text-foreground">Reports</Link>
          <span>›</span>
          <Link to="/admin/reports" className="hover:text-foreground">Care Log Monitoring</Link>
          <span>›</span>
          <span className="text-foreground font-medium">ROBERT FOX LOG</span>
        </nav>
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="text-right">
            <p className="text-sm font-medium">Sarah Jenkins</p>
            <p className="text-xs text-muted-foreground">System Admin</p>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Log Header */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">Robert Fox - Live Care Log</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>Caregiver: Leslie Alexander</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Submitted: Today, 10:15 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button className="gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Acknowledge Log
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Send className="w-4 h-4" />
                      Send Summary to Family
                    </Button>
                    <Button variant="destructive" className="gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Escalate Incident
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vital Signs */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Vital Signs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {vitalSigns.map((vital) => (
                    <Card key={vital.label} className={`border ${vital.status === 'HIGH' ? 'border-red-200 bg-red-50/50' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-medium ${vital.status === 'HIGH' ? 'text-red-600' : 'text-primary'}`}>
                            {vital.label}
                          </span>
                          <Badge className={vital.statusColor}>{vital.status}</Badge>
                        </div>
                        <p className="text-3xl font-bold">
                          {vital.value}
                          {vital.unit && <span className="text-lg font-normal text-muted-foreground ml-1">{vital.unit}</span>}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{vital.target}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medication Intake */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5 text-primary" />
                  Medication Intake
                </CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-xs font-medium text-primary uppercase">Medication</th>
                      <th className="text-left py-2 text-xs font-medium text-primary uppercase">Dosage</th>
                      <th className="text-left py-2 text-xs font-medium text-primary uppercase">Schedule</th>
                      <th className="text-left py-2 text-xs font-medium text-primary uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medications.map((med) => (
                      <tr key={med.name} className="border-b border-border last:border-0">
                        <td className={`py-3 font-medium ${med.highlight ? 'text-red-600' : ''}`}>{med.name}</td>
                        <td className={`py-3 ${med.highlight ? 'text-red-600' : ''}`}>{med.dosage}</td>
                        <td className="py-3 text-primary">{med.schedule}</td>
                        <td className="py-3">
                          <span className={`flex items-center gap-1 ${med.statusColor}`}>
                            {med.status === 'ADMINISTERED' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <AlertTriangle className="w-4 h-4" />
                            )}
                            {med.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Nutrition & Mobility */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UtensilsCrossed className="w-5 h-5 text-primary" />
                    Nutrition & Hydration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Breakfast</span>
                    <span className="font-medium">Oatmeal & Fruit</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Appetite</span>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">LOW</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-primary font-medium">WATER INTAKE</span>
                    <span className="font-medium">3 glasses</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PersonStanding className="w-5 h-5 text-primary" />
                    Mobility & Exercise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Activity Type</span>
                    <span className="font-medium">Assisted Walk</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">15 Minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-primary font-medium">ADMIN NOTES</span>
                    <span className="font-medium">Good progress</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Patient Sidebar */}
          <div className="space-y-6">
            {/* Patient Profile */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" />
                  <AvatarFallback>RF</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{patientInfo.name}</h3>
                <p className="text-red-600 font-medium text-sm">{patientInfo.riskProfile}</p>

                <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase">Age</p>
                    <p className="font-semibold">{patientInfo.age}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase">Gender</p>
                    <p className="font-semibold">{patientInfo.gender}</p>
                  </div>
                </div>

                <div className="mt-4 text-left">
                  <p className="text-xs text-primary font-medium uppercase mb-2">Primary Diagnoses</p>
                  <div className="flex flex-wrap gap-2">
                    {patientInfo.diagnoses.map((diagnosis) => (
                      <Badge key={diagnosis} variant="secondary">{diagnosis}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-0 shadow-sm bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-semibold">Emergency Contact</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{patientInfo.emergencyContact.name}</p>
                    <p className="text-sm text-primary-foreground/80">{patientInfo.emergencyContact.relationship}</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  {patientInfo.emergencyContact.phone}
                </Button>
              </CardContent>
            </Card>

            {/* Submission History */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Submission History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Today, 10:15 AM</p>
                    <p className="text-xs text-muted-foreground">Leslie Alexander</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Yesterday, 08:30 AM</p>
                    <p className="text-xs text-muted-foreground">Leslie Alexander</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Oct 22, 09:00 AM</p>
                    <p className="text-xs text-muted-foreground">Guy Hawkins</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareLogDetail;
