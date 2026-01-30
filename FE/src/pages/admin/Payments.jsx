import { ArrowLeft, FileText, PlusCircle, Mail, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const invoice = {
  id: "INV-8821",
  status: "PAID",
  source: "ONLINE VIA FAMILY APP",
  issuedDate: "Oct 24, 2023",
  patient: {
    name: "Eleanor Herbert",
    id: "PAT-4402",
    address: "482 Oak Lane, Spring Valley, CA 91977",
  },
  family: {
    name: "Sarah Herbert",
    relationship: "Daughter",
    email: "sarah.h@email.com",
    phone: "+1 (555) 012-3456",
  },
  payment: {
    method: "Visa •••• 4242",
    date: "Oct 25, 2023",
    transactionId: "TXN_998231024",
  },
  services: [
    { caregiver: "Marcus Wong", serviceType: "SKILLED NURSING", duration: "8 Hours (Oct 21)", amount: 640.00 },
    { caregiver: "Marcus Wong", serviceType: "SKILLED NURSING", duration: "7.5 Hours (Oct 22)", amount: 600.00 },
  ],
  subtotal: 1240.00,
  tax: 0.00,
  total: 1240.00,
  notes: [
    {
      text: "Family requested invoice breakdown for insurance reimbursement. Sent via portal.",
      author: "Robert Chen",
      date: "Oct 24, 2023",
    },
  ],
};

const Payments = () => {
  return (
    <div className="p-6">
      {/* Back Link */}
      <Link 
        to="/admin/payments" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Invoices
      </Link>

      {/* Invoice Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">INVOICE #{invoice.id}</h1>
            <Badge className="bg-green-100 text-green-700">• {invoice.status}</Badge>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="text-primary font-medium">📱 {invoice.source}</span>
            <span>📅 Issued: {invoice.issuedDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <FileText className="w-4 h-4" />
            Export PDF
          </Button>
          <Button className="gap-2">
            <PlusCircle className="w-4 h-4" />
            Add Internal Note
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Patient & Family Info */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    PATIENT INFORMATION
                  </h3>
                  <div className="flex items-start gap-3">
                    <Avatar className="bg-teal-100 text-teal-700">
                      <AvatarFallback>EH</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{invoice.patient.name}</p>
                      <p className="text-sm text-primary">Patient ID: #{invoice.patient.id}</p>
                      <p className="text-sm text-muted-foreground mt-1">{invoice.patient.address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    FAMILY REPRESENTATIVE
                  </h3>
                  <div>
                    <p className="font-semibold">{invoice.family.name}</p>
                    <p className="text-sm text-muted-foreground">Relationship: {invoice.family.relationship}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <Mail className="w-4 h-4" />
                      {invoice.family.email}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Phone className="w-4 h-4" />
                      {invoice.family.phone}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Breakdown */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Service Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-xs font-medium text-primary uppercase">Caregiver</th>
                    <th className="text-left py-3 text-xs font-medium text-primary uppercase">Service Type</th>
                    <th className="text-left py-3 text-xs font-medium text-primary uppercase">Duration</th>
                    <th className="text-right py-3 text-xs font-medium text-primary uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.services.map((service, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 bg-primary text-primary-foreground">
                            <AvatarFallback className="text-xs">MW</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{service.caregiver}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <Badge variant="secondary" className="skill-tag">
                          {service.serviceType}
                        </Badge>
                      </td>
                      <td className="py-4 text-muted-foreground">{service.duration}</td>
                      <td className="py-4 text-right font-medium">${service.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-b border-border">
                    <td colSpan={3} className="py-3 text-primary">Subtotal</td>
                    <td className="py-3 text-right">${invoice.subtotal.toFixed(2)}</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td colSpan={3} className="py-3 text-primary">Tax (0%)</td>
                    <td className="py-3 text-right">${invoice.tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="py-4 font-bold text-lg">TOTAL AMOUNT</td>
                    <td className="py-4 text-right font-bold text-2xl text-primary">${invoice.total.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Origin */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm uppercase text-muted-foreground">Payment Origin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Paid via Family Portal</p>
                  <p className="text-xs text-muted-foreground">TRANSACTION ID: {invoice.payment.transactionId}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground uppercase text-xs">Method</p>
                  <p className="font-medium">{invoice.payment.method}</p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase text-xs">Date</p>
                  <p className="font-medium">{invoice.payment.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internal Admin Notes */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm uppercase text-muted-foreground">Internal Admin Notes</CardTitle>
              <Button variant="link" className="text-primary p-0 h-auto">Add New</Button>
            </CardHeader>
            <CardContent>
              {invoice.notes.map((note, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm">{note.text}</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                    <span className="text-primary">By {note.author}</span>
                    <span>{note.date}</span>
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

export default Payments;
