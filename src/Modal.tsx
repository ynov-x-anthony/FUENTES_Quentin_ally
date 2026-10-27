import { useEffect, useRef } from 'react'

type Props = { onClose: () => void }

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const modal = ref.current

    if (!modal) return

    const focusables = modal.querySelectorAll<HTMLElement>(
      'button:not([disabled]), select:not([disabled])'
    )

    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    first?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="m-title"
        ref={ref}
      >
        <h2 id="m-title">Préférences avancées</h2>

        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>

        <button type="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  )
}