import { Search, Filter, UserPlus, ChevronLeft, ChevronRight, Eye, MoreVertical, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import AdminHeader from "@/components/layout/AdminHeader";

const statsCards = [
  { label: "TOTAL PATIENTS", value: "1,284", icon: "👥", color: "bg-blue-50" },
  { label: "ACTIVE CARE PLANS", value: "892", icon: "📋", color: "bg-green-50" },
  { label: "HIGH RISK", value: "47", icon: "⚠️", color: "bg-red-50" },
  { label: "NEW THIS MONTH", value: "23", icon: "✨", color: "bg-amber-50" },
];

const patients = [
  {
    id: "PAT-4402",
    name: "Eleanor Herbert",
    age: 78,
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100",
    caregiver: "Marcus Wong",
    careType: "SKILLED NURSING",
    riskLevel: "HIGH",
    status: "ACTIVE",
    lastVisit: "Today, 10:15 AM",
  },
  {
    id: "PAT-3891",
    name: "Robert Fox",
    age: 82,
    gender: "Male",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    caregiver: "Leslie Alexander",
    careType: "MEMORY CARE",
    riskLevel: "HIGH",
    status: "ACTIVE",
    lastVisit: "Today, 08:30 AM",
  },
  {
    id: "PAT-2756",
    name: "Kristin Watson",
    age: 65,
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    caregiver: "Jenny Wilson",
    careType: "PHYSICAL THERAPY",
    riskLevel: "MEDIUM",
    status: "ACTIVE",
    lastVisit: "Yesterday",
  },
  {
    id: "PAT-1923",
    name: "Wade Warren",
    age: 71,
    gender: "Male",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    caregiver: "Esther Howard",
    careType: "POST-OP CARE",
    riskLevel: "LOW",
    status: "ACTIVE",
    lastVisit: "Oct 22, 2023",
  },
  {
    id: "PAT-1587",
    name: "Dianne Russell",
    age: 68,
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    caregiver: "Guy Hawkins",
    careType: "COMPANIONSHIP",
    riskLevel: "LOW",
    status: "ON HOLD",
    lastVisit: "Oct 20, 2023",
  },
];

const getRiskColor = (risk) => {
  switch(risk?.toLowerCase()) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-800";
    case "on hold":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-blue-100 text-blue-700";
  }
};

const Patients = () => {
  return (
    <div>
      <AdminHeader 
        breadcrumb="Patient Directory" 
        searchPlaceholder="Search patients by name, ID, or condition..."
      />

      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Patient Directory</h1>
            <p className="text-muted-foreground">Manage patient records, care plans, and health monitoring.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button size="sm" className="gap-2">
              <UserPlus className="w-4 h-4" />
              Add New Patient
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {statsCards.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Patients Table */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Patient</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Assigned Caregiver</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Care Type</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Risk Level</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Last Visit</th>
                  <th className="text-right p-4"></th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={patient.avatar} />
                          <AvatarFallback>{patient.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {patient.age} yrs • {patient.gender} • ID: {patient.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{patient.caregiver}</td>
                    <td className="p-4">
                      <Badge variant="secondary" className="skill-tag text-[10px]">
                        {patient.careType}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={`text-[10px] ${getRiskColor(patient.riskLevel)}`}>
                        {patient.riskLevel}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={`text-[10px] ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{patient.lastVisit}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Activity className="w-3 h-3" />
                          View Log
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
              <p className="text-sm text-primary">Showing 5 of 1,284 patients</p>
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
      </div>
    </div>
  );
};

export default Patients;
