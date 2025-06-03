
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <ScrollArea className="flex-1">
        <div className="flex min-h-full">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header title={title} />
            <main className="flex-1 p-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardLayout;
