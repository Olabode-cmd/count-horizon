export interface RoutesType {
  path: string;
  name: string;
  icon?: React.ReactNode; // Updated type for icon
  component: React.ElementType;
  layout: string;
  secondary?: boolean;
  roles?: string[]; // Add roles property
}
