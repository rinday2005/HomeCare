
export type Status = 'Pending' | 'Approved' | 'Rejected' | 'Active' | 'Expired';

export interface CareRequest {
  id: string;
  familyRepresentative: string;
  patientName: string;
  patientAge: number;
  serviceType: string;
  period: string;
  schedule: string;
  status: 'Pending Approval' | 'Approved' | 'Rejected';
  paymentAmount: number;
  paymentMethod: string;
  priority: 'High' | 'Medium' | 'Low';
  avatar: string;
}

export interface Caregiver {
  id: string;
  name: string;
  email: string;
  skills: string[];
  status: 'Available' | 'On-duty' | 'Offline';
  rating: number;
  reviews: number;
  experience: string;
  avatar: string;
}
