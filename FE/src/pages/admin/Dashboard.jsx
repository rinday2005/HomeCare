import { Users, UserCheck, FileText, Activity, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminHeader from "@/components/layout/AdminHeader";

const statsCards = [
  { label: "Total Patients", value: "1,284", icon: Users, change: "+12%", color: "bg-blue-50", iconColor: "text-blue-500" },
  { label: "Active Caregivers", value: "312", icon: UserCheck, change: "+8%", color: "bg-teal-50", iconColor: "text-teal-500" },
  { label: "Pending Requests", value: "24", icon: FileText, change: "-5%", color: "bg-amber-50", iconColor: "text-amber-500" },
  { label: "Health Alerts", value: "7", icon: Activity, change: "+2", color: "bg-red-50", iconColor: "text-red-500" },
];

const Dashboard = () => {
  return (
    <div>
      <AdminHeader 
        breadcrumb="Dashboard" 
        searchPlaceholder="Search..."
      />

      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground">Here's what's happening with your care network today.</p>
          </div>
          <Button className="gap-2">
            <Calendar className="w-4 h-4" />
            View Schedule
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {statsCards.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Add Patient</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <UserCheck className="w-6 h-6 text-primary" />
                <span>Add Caregiver</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <FileText className="w-6 h-6 text-primary" />
                <span>New Request</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Activity className="w-6 h-6 text-primary" />
                <span>View Reports</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New caregiver onboarded</p>
                  <p className="text-xs text-muted-foreground">Esther Howard joined the network</p>
                </div>
                <span className="text-xs text-muted-foreground">2h ago</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Care request approved</p>
                  <p className="text-xs text-muted-foreground">Wade Warren's request processed</p>
                </div>
                <span className="text-xs text-muted-foreground">4h ago</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Schedule updated</p>
                  <p className="text-xs text-muted-foreground">Monday shifts reorganized</p>
                </div>
                <span className="text-xs text-muted-foreground">6h ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
