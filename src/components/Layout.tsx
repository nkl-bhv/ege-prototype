import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2ff] via-[#f7f9ff] to-[#ffffff] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-4 py-6 sm:px-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
