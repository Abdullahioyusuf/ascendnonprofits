export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  type: 'free' | 'paid' | 'external';
  downloadUrl?: string;
  externalUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  organization: string;
  message: string;
  service: string;
}