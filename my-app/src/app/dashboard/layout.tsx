"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The dashboard layout will just render the children
    // All the layout logic is handled in the dashboard/page.tsx
    <>{children}</>
  );
}
