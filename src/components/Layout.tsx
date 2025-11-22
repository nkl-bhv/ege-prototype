import { PropsWithChildren } from 'react';

const patternSvg = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
    <text x='12' y='28' font-size='22'>📘</text>
    <text x='70' y='34' font-size='18'>📈</text>
    <text x='30' y='82' font-size='20'>✏️</text>
    <text x='85' y='90' font-size='22'>📒</text>
  </svg>
`);

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#E6F2FF] to-white text-slate-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,${patternSvg}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
        }}
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pb-10 pt-6 sm:px-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
