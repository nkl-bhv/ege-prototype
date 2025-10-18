import { HomeIcon, TrophyIcon, UserIcon } from './nav-icons'

export function BottomNav() {
  const items = [
    { id: 'home', label: 'Домой', active: true, icon: HomeIcon },
    { id: 'achievements', label: 'Ачивки', active: false, icon: TrophyIcon },
    { id: 'profile', label: 'Профиль', active: false, icon: UserIcon }
  ]

  return (
    <nav className="sticky bottom-3 mx-auto w-full max-w-sm rounded-3xl bg-white/90 p-2 shadow-card backdrop-blur">
      <ul className="flex items-center justify-around">
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={`flex flex-col items-center rounded-2xl px-4 py-2 text-xs font-semibold transition ${
                item.active ? 'bg-secondary text-white shadow-soft' : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <item.icon className={`h-5 w-5 ${item.active ? 'text-white' : 'text-neutral-400'}`} />
              <span className="mt-1">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
