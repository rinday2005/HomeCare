import { ChevronLeft, ChevronRight, Plus, Filter, Search, GripVertical, Clock, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weekDays = [
  { day: "MON", date: 23, isToday: false },
  { day: "TUE", date: 24, isToday: true },
  { day: "WED", date: 25, isToday: false },
  { day: "THU", date: 26, isToday: false },
  { day: "FRI", date: 27, isToday: false },
  { day: "SAT", date: 28, isToday: false },
  { day: "SUN", date: 29, isToday: false },
];

const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

const scheduledShifts = [
  {
    id: 1,
    patient: "Robert F...",
    service: "Elderly Care",
    caregiver: { name: "Esther H.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
    status: "CONFIRMED",
    day: 0, // Monday
    startTime: 0, // 08:00 AM
    duration: 3,
  },
  {
    id: 2,
    patient: "Wade W...",
    service: "Post-Op Care",
    caregiver: { name: "Leslie A.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
    status: "COMPLETED",
    day: 1, // Tuesday
    startTime: 1, // 09:00 AM
    duration: 2,
  },
  {
    id: 3,
    patient: "Jane Co...",
    service: "Physical Therapy",
    caregiver: { name: "Guy H.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
    status: "IN-PROGRESS",
    day: 1, // Tuesday
    startTime: 2, // 10:00 AM
    duration: 3,
  },
];

const unassignedShifts = [
  {
    id: 1,
    patient: "Marvin McKinney",
    service: "Memory Care",
    date: "Tue, Oct 24",
    time: "02:00 PM - 05:00 PM",
    priority: "HIGH PRIORITY",
  },
  {
    id: 2,
    patient: "Eleanor Pena",
    service: "Personal Care",
    date: "Wed, Oct 25",
    time: "09:00 AM - 01:00 PM",
    priority: "RECURRING",
  },
  {
    id: 3,
    patient: "Albert Flores",
    service: "Mobility Support",
    date: "Thu, Oct 26",
    time: "11:30 AM - 02:30 PM",
    priority: "STANDARD",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "CONFIRMED":
      return "bg-primary/10 border-l-4 border-l-primary";
    case "COMPLETED":
      return "bg-green-50 border-l-4 border-l-green-500";
    case "IN-PROGRESS":
      return "bg-amber-50 border-l-4 border-l-amber-500";
    default:
      return "bg-muted";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "HIGH PRIORITY":
      return "bg-red-100 text-red-700";
    case "RECURRING":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Schedule = () => {
  return (
    <div>
      <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <nav className="text-sm text-muted-foreground">
            <span>Admin</span>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">CENTRAL CARE SCHEDULE</span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Tabs defaultValue="week">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="day">Day</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="font-medium">October 23 - 29, 2023</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="text-right">
            <p className="text-sm font-medium">Sarah Jenkins</p>
            <p className="text-xs text-muted-foreground">System Admin</p>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Calendar Grid */}
        <div className="flex-1 p-6">
          {/* Week Header */}
          <div className="grid grid-cols-8 gap-2 mb-4">
            <div className="w-20" /> {/* Time column spacer */}
            {weekDays.map((day) => (
              <div
                key={day.day}
                className={`text-center py-2 rounded-lg ${
                  day.isToday ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                <p className="text-xs font-medium">{day.day}</p>
                <p className="text-2xl font-bold">{day.date}</p>
              </div>
            ))}
          </div>

          {/* Time Grid */}
          <div className="relative">
            {timeSlots.map((time, timeIndex) => (
              <div key={time} className="grid grid-cols-8 gap-2 min-h-[80px]">
                <div className="w-20 text-xs text-muted-foreground pt-2 text-right pr-4">
                  {time}
                </div>
                {weekDays.map((_, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="border border-dashed border-border rounded-lg min-h-[80px] relative"
                  >
                    {scheduledShifts
                      .filter((shift) => shift.day === dayIndex && shift.startTime === timeIndex)
                      .map((shift) => (
                        <div
                          key={shift.id}
                          className={`absolute inset-x-1 top-1 p-2 rounded-lg ${getStatusColor(shift.status)}`}
                          style={{ height: `${shift.duration * 80 - 8}px` }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="secondary" className="text-[10px] bg-transparent p-0 font-medium">
                              {shift.status}
                            </Badge>
                            <GripVertical className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <p className="font-medium text-sm truncate">{shift.patient}</p>
                          <p className="text-xs text-muted-foreground">{shift.service}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Avatar className="w-5 h-5">
                              <AvatarImage src={shift.caregiver.avatar} />
                              <AvatarFallback>{shift.caregiver.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">{shift.caregiver.name}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Unassigned Shifts Panel */}
        <div className="w-80 border-l border-border p-6 bg-muted/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">UNASSIGNED SHIFTS</h3>
            <Badge variant="destructive" className="text-xs">4 NEEDED</Badge>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Find unassigned..." className="pl-10" />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Button className="flex-1 gap-2">
              <Plus className="w-4 h-4" />
              New Shift
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {unassignedShifts.map((shift) => (
              <Card key={shift.id} className="border shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`text-[10px] ${getPriorityColor(shift.priority)}`}>
                      {shift.priority}
                    </Badge>
                    <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                  </div>
                  <h4 className="font-semibold mb-2">{shift.patient}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Home className="w-3 h-3" />
                      <span>{shift.service}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{shift.date} • {shift.time}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3" size="sm">
                    Assign Caregiver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shift Status Legend */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs font-medium text-muted-foreground mb-2">SHIFT STATUS</p>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Confirmed</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>In-Progress</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;