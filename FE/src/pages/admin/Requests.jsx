import { AlertTriangle, Clock, Users, UserPlus, Check, ChevronLeft, ChevronRight, MoreVertical, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminHeader from "@/components/layout/AdminHeader";

const statsCards = [
  { label: "URGENT REQUESTS", value: "04", icon: AlertTriangle, color: "bg-red-50", iconColor: "text-red-500" },
  { label: "AVERAGE WAIT TIME", value: "1.2 Hours", icon: Clock, color: "bg-amber-50", iconColor: "text-amber-500" },
  { label: "AVAILABLE CAREGIVERS", value: "18 Available", icon: Users, color: "bg-teal-50", iconColor: "text-teal-500" },
];

const requests = [
  {
    id: "#RQ-7721",
    patient: {
      name: "Wade Warren",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    service: "Post-Op Recovery",
    description: "Surgical incision care, mobility support",
    date: "Oct 26, 2023",
    time: "09:00 AM - 05:00 PM",
    urgency: "URGENT",
    status: "PENDING",
  },
  {
    id: "#RQ-7698",
    patient: {
      name: "Jane Cooper",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
    service: "Elderly Companionship",
    description: "Daily walks, meal prep, medication reminders",
    date: "Oct 28, 2023",
    time: "Flexible Time",
    urgency: "STANDARD",
    status: "REVIEWING",
  },
  {
    id: "#RQ-7690",
    patient: {
      name: "Robert Fox",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
    service: "Physical Therapy Assist",
    description: "Post-stroke rehabilitation exercises",
    date: "Oct 27, 2023",
    time: "02:00 PM - 04:00 PM",
    urgency: "PRIORITY",
    status: "PENDING",
  },
];

const activeCaregivers = [
  {
    name: "Esther Howard",
    role: "RN Nurse",
    rating: 5.0,
    distance: "2km away",
    status: "AVAILABLE",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    name: "Leslie Alexander",
    role: "Therapist",
    rating: 4.9,
    distance: "5km away",
    status: "AVAILABLE",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
];

const systemAlerts = [
  {
    type: "urgent",
    title: "New Urgent Request",
    description: "Patient 'Wade Warren' requested immediate assistance for Post-Op care.",
    icon: AlertTriangle,
  },
  {
    type: "success",
    title: "Assignment Successful",
    description: "Caregiver assigned to patient successfully.",
    icon: CheckCircle,
  },
];

const getUrgencyClass = (urgency) => {
  switch (urgency) {
    case "URGENT":
      return "urgency-urgent";
    case "PRIORITY":
      return "urgency-priority";
    default:
      return "urgency-standard";
  }
};

const Requests = () => {
  return (
    <div>
      <AdminHeader 
        breadcrumb="SERVICE REQUESTS" 
        searchPlaceholder="Search requests by patient or service..."
      />

      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Service Request Approval Hub</h1>
            <p className="text-muted-foreground">Review and process new care requests from families.</p>
          </div>
          <Tabs defaultValue="pending">
            <TabsList>
              <TabsTrigger value="pending" className="gap-1">
                Pending (12)
              </TabsTrigger>
              <TabsTrigger value="reviewing" className="gap-1">
                Reviewing (5)
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {statsCards.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requests Table */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Patient Details</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Service Requested</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Preferred Schedule</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Status & Urgency</th>
                  <th className="text-right p-4 text-xs font-medium text-primary uppercase tracking-wider">Approval Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={request.patient.avatar} />
                          <AvatarFallback>{request.patient.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{request.patient.name}</p>
                          <p className="text-sm text-primary">ID: {request.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-medium">{request.service}</p>
                      <p className="text-sm text-primary">{request.description}</p>
                    </td>
                    <td className="p-4">
                      <p className="font-medium">{request.date}</p>
                      <p className="text-sm text-primary">{request.time}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        <Badge className={`status-badge ${getUrgencyClass(request.urgency)} w-fit`}>
                          {request.urgency}
                        </Badge>
                        <Badge variant="outline" className="w-fit text-xs">
                          {request.status}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <UserPlus className="w-3 h-3" />
                          Assign
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Check className="w-3 h-3" />
                          Approve
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-4 border-t border-border flex items-center justify-between">
              <p className="text-sm text-primary">Showing 3 of 12 pending requests</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="w-8 h-8">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Active Caregivers */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Active Caregivers</CardTitle>
              <Button variant="link" className="text-primary p-0 h-auto">FULL ROSTER</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeCaregivers.map((caregiver) => (
                <div key={caregiver.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={caregiver.avatar} />
                      <AvatarFallback>{caregiver.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{caregiver.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {caregiver.role} • {caregiver.rating} ⭐ • {caregiver.distance}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-600 bg-green-50">
                    {caregiver.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-lg text-white">System Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${
                    alert.type === "urgent" ? "bg-red-500/20" : "bg-green-500/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <alert.icon className={`w-5 h-5 mt-0.5 ${
                      alert.type === "urgent" ? "text-red-400" : "text-green-400"
                    }`} />
                    <div>
                      <p className="font-medium">{alert.title}</p>
                      <p className="text-sm text-white/70">{alert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Requests;