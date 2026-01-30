import { Filter, UserPlus, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AdminHeader from "@/components/layout/AdminHeader";

const statsCards = [
  { label: "AVAILABLE ONLINE", value: "124", icon: "👥", color: "bg-emerald-50" },
  { label: "CURRENTLY ON-DUTY", value: "312", icon: "📋", color: "bg-blue-50" },
  { label: "AVG. NETWORK RATING", value: "4.85", icon: "⭐", color: "bg-orange-50", suffix: "★" },
];

const caregivers = [
  {
    id: "CG-8821",
    name: "Esther Howard",
    role: "Reg. Nurse (RN)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    skills: ["ELDERLY CARE", "DEMENTIA"],
    status: "ONLINE",
    rating: 5.0,
    reviews: 124,
    schedule: "Mon - Fri",
    hours: "08:00 AM - 04:00 PM",
  },
  {
    id: "CG-4502",
    name: "Guy Hawkins",
    role: "Care Aide",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    skills: ["PHYSICAL THERAPY", "WOUND CARE"],
    status: "ON-DUTY",
    rating: 4.8,
    reviews: 86,
    schedule: "Mon, Wed, Fri",
    hours: "09:00 AM - 05:00 PM",
  },
  {
    id: "CG-1109",
    name: "Leslie Alexander",
    role: "Speech Therapist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    skills: ["SPEECH THERAPY", "PEDIATRIC"],
    status: "OFFLINE",
    rating: 4.9,
    reviews: 210,
    schedule: "Tue, Thu",
    hours: "10:00 AM - 06:00 PM",
  },
  {
    id: "CG-5541",
    name: "Kristin Watson",
    role: "Home Health Aide",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    skills: ["POST-OP CARE", "NUTRITION"],
    status: "ONLINE",
    rating: 4.7,
    reviews: 43,
    schedule: "Daily",
    hours: "07:00 AM - 03:00 PM",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "ONLINE":
      return "status-online";
    case "ON-DUTY":
      return "status-on-duty";
    default:
      return "status-offline";
  }
};

const Caregivers = () => {
  return (
    <div>
      <AdminHeader 
        breadcrumb="Caregiver Directory" 
        searchPlaceholder="Search caregivers by name, skill, or status..."
      />

      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Caregiver Directory</h1>
            <p className="text-muted-foreground">Manage, monitor, and recruit your professional care network.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button size="sm" className="gap-2">
              <UserPlus className="w-4 h-4" />
              Recruit New Caregiver
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {statsCards.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold">
                    {stat.value}
                    {stat.suffix && <span className="text-amber-500 ml-1">{stat.suffix}</span>}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Caregivers Table */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Caregiver</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Specialized Skills</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Avg. Rating</th>
                  <th className="text-left p-4 text-xs font-medium text-primary uppercase tracking-wider">Schedule</th>
                  <th className="text-right p-4"></th>
                </tr>
              </thead>
              <tbody>
                {caregivers.map((caregiver) => (
                  <tr key={caregiver.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={caregiver.avatar} />
                            <AvatarFallback>{caregiver.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                            caregiver.status === "ONLINE" ? "bg-emerald-500" : 
                            caregiver.status === "ON-DUTY" ? "bg-blue-500" : "bg-gray-400"
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium">{caregiver.name}</p>
                          <p className="text-sm text-primary">{caregiver.role} • ID: {caregiver.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {caregiver.skills.map((skill) => (
                          <Badge key={skill} className="bg-blue-100 text-blue-700 font-semibold text-[10px]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        caregiver.status === "ONLINE" ? "bg-emerald-100 text-emerald-700" : 
                        caregiver.status === "ON-DUTY" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          caregiver.status === "ONLINE" ? "bg-emerald-500" : 
                          caregiver.status === "ON-DUTY" ? "bg-blue-500" : "bg-gray-400"
                        }`} />
                        {caregiver.status}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{caregiver.rating}</span>
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-muted-foreground text-sm">({caregiver.reviews})</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-medium">{caregiver.schedule}</p>
                      <p className="text-xs text-muted-foreground">{caregiver.hours}</p>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="outline" size="sm">View Profile</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-4 border-t border-border flex items-center justify-between">
              <p className="text-sm text-primary">Showing 4 of 542 caregivers</p>
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

        {/* Recruitment Banner */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white border-0 shadow-lg">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Grow your care network</h3>
              <p className="text-white/70 mt-1">
                Access the recruitment portal to manage pending applications, conduct interviews, and onboard new qualified care professionals.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-white text-slate-800 hover:bg-gray-100 gap-2 font-semibold">
                <UserPlus className="w-4 h-4" />
                Pending Applications (12)
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2 font-semibold">
                Onboarding Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Caregivers;