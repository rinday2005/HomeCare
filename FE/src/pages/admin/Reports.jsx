import { Play, FileText, FileSpreadsheet, Clock, Eye, TrendingDown, Star, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AdminHeader from "@/components/layout/AdminHeader";
import { Link } from "react-router-dom";

const caregiverLogs = [
  {
    id: "CG-4920",
    caregiver: {
      name: "Leslie Alexander",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
    patient: "Robert Fox",
    lastSubmission: "10:15 AM",
    status: "URGENT ACTION",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    id: "CG-8812",
    caregiver: {
      name: "Jenny Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
    patient: "Kristin Watson",
    lastSubmission: "09:45 AM",
    status: "PENDING REVIEW",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "CG-3341",
    caregiver: {
      name: "Guy Hawkins",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    patient: "Dianne Russell",
    lastSubmission: "08:30 AM",
    status: "ACKNOWLEDGED",
    statusColor: "bg-gray-100 text-gray-700",
  },
];

const healthMetrics = [
  {
    title: "Avg. Blood Pressure",
    value: "122/81",
    unit: "mmHg Average",
    status: "STABLE",
    statusColor: "text-green-600",
    data: [60, 70, 65, 75, 70, 85, 100],
  },
  {
    title: "Heart Rate (BPM)",
    value: "74",
    unit: "BPM Average",
    status: "-2% Δ",
    statusColor: "text-blue-600",
    data: [50, 55, 60, 55, 65, 70, 80],
  },
  {
    title: "SpO2 Levels",
    value: "98%",
    unit: "Oxygen Saturation",
    status: "OPTIMAL",
    statusColor: "text-green-600",
    data: [70, 75, 80, 85, 75, 90, 100],
    highlight: true,
  },
];

const incidents = [
  { type: "Medication Missed", qty: 3, trend: "down", resolution: "CLOSED" },
  { type: "Fall Reported", qty: 1, trend: "stable", resolution: "MONITORING" },
  { type: "Vital Anomaly", qty: 2, trend: "up", resolution: "IN REVIEW" },
];

const Reports = () => {
  return (
    <div>
      <AdminHeader 
        breadcrumb="CARE LOG MONITORING" 
        searchPlaceholder="Search active caregivers or logs..."
      />

      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Care Log Monitoring & Management</h1>
            <p className="text-muted-foreground">Real-time oversight of caregiver submissions and patient health status.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Play className="w-4 h-4" />
              Live Feed
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              PDF
            </Button>
            <Button variant="outline" className="gap-2">
              <FileSpreadsheet className="w-4 h-4" />
              Excel
            </Button>
          </div>
        </div>

        {/* Real-time Caregiver Logs */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                👥
              </span>
              Real-time Caregiver Logs
            </CardTitle>
            <span className="text-sm text-primary font-medium">TODAY: OCT 24, 2023</span>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-xs font-medium text-primary uppercase">Caregiver</th>
                  <th className="text-left p-3 text-xs font-medium text-primary uppercase">Patient</th>
                  <th className="text-left p-3 text-xs font-medium text-primary uppercase">Last Submission</th>
                  <th className="text-left p-3 text-xs font-medium text-primary uppercase">Status</th>
                  <th className="text-right p-3 text-xs font-medium text-primary uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {caregiverLogs.map((log) => (
                  <tr key={log.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={log.caregiver.avatar} />
                          <AvatarFallback>{log.caregiver.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{log.caregiver.name}</p>
                          <p className="text-sm text-primary">ID: {log.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{log.patient}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {log.lastSubmission}
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={log.statusColor}>{log.status}</Badge>
                    </td>
                    <td className="p-3 text-right">
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <Link to={`/admin/reports/care-log/${log.id}`}>
                          <Eye className="w-3 h-3" />
                          View Live Log
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Patient Health Trends */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              📊 Patient Health Trends
            </CardTitle>
            <span className="text-sm text-primary font-medium">DAILY AVERAGE SUMMARY</span>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {healthMetrics.map((metric) => (
                <Card key={metric.title} className={`border ${metric.highlight ? 'border-orange-200' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-primary font-medium">{metric.title}</span>
                      <Badge variant="secondary" className={metric.statusColor}>
                        {metric.status}
                      </Badge>
                    </div>
                    {/* Simple Bar Chart */}
                    <div className="flex items-end gap-1 h-20 mb-4">
                      {metric.data.map((value, index) => (
                        <div
                          key={index}
                          className={`flex-1 rounded-t ${
                            metric.highlight && index === metric.data.length - 1
                              ? 'bg-orange-400'
                              : 'bg-primary/20'
                          }`}
                          style={{ height: `${value}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{metric.value}</span>
                      <span className="text-sm text-muted-foreground">{metric.unit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Performance Reports */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                Performance Reports
              </CardTitle>
              <Button variant="link" className="text-primary p-0">Full Analytics</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Average Punctuality</span>
                  <span className="font-semibold">94.8%</span>
                </div>
                <Progress value={94.8} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Log Completion Rate</span>
                  <span className="font-semibold">98.2%</span>
                </div>
                <Progress value={98.2} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Family Satisfaction</span>
                  <span className="font-semibold">4.7/5.0</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Monthly Incident Summary */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Monthly Incident Summary
              </CardTitle>
              <Badge variant="destructive">Action Required</Badge>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-xs font-medium text-muted-foreground uppercase">Issue Type</th>
                    <th className="text-center py-2 text-xs font-medium text-muted-foreground uppercase">Qty</th>
                    <th className="text-center py-2 text-xs font-medium text-muted-foreground uppercase">Trend</th>
                    <th className="text-right py-2 text-xs font-medium text-muted-foreground uppercase">Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map((incident) => (
                    <tr key={incident.type} className="border-b border-border last:border-0">
                      <td className="py-3 font-medium">{incident.type}</td>
                      <td className="py-3 text-center">{incident.qty}</td>
                      <td className="py-3 text-center">
                        <TrendingDown className={`w-4 h-4 mx-auto ${
                          incident.trend === 'down' ? 'text-green-500' : 
                          incident.trend === 'up' ? 'text-red-500' : 'text-gray-400'
                        }`} />
                      </td>
                      <td className="py-3 text-right">
                        <Badge variant={incident.resolution === 'CLOSED' ? 'default' : 'secondary'}>
                          {incident.resolution}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
