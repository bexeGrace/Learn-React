declare module 'react-badge' {
    export interface BadgeProps {
      count?: number;
      children: React.ReactNode;
    }
  
    export default function Badge(props: BadgeProps): JSX.Element;
  }
  