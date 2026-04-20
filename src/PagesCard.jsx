import { useMemo, useState } from 'react'

function PagesCard({
  pageCount = 6,
  visibleRows = 4,
  title = 'All pages',
  buttonLabel = 'Done',
}) {
  const pageLabels = useMemo(
    () => Array.from({ length: pageCount }, (_, index) => `Page ${index + 1}`),
    [pageCount],
  )
  const [checkedPages, setCheckedPages] = useState(() =>
    Array.from({ length: pageCount }, () => false),
  )

  const allSelected = checkedPages.every(Boolean)

  const handleToggleAllPages = (checked) => {
    setCheckedPages(Array.from({ length: pageCount }, () => checked))
  }

  const handleTogglePage = (pageIndex, checked) => {
    setCheckedPages((currentPages) =>
      currentPages.map((isChecked, index) =>
        index === pageIndex ? checked : isChecked,
      ),
    )
  }

  return (
    <section className="pages-card" aria-label="Pages selection card">
      <label className="pages-row pages-row-all">
        <span>{title}</span>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={(event) => handleToggleAllPages(event.target.checked)}
        />
      </label>

      <hr className="pages-divider" />

      <div className="pages-list" style={{ '--visible-rows': visibleRows }}>
        {pageLabels.map((label, index) => (
          <label key={label} className="pages-row">
            <span>{label}</span>
            <input
              type="checkbox"
              checked={checkedPages[index]}
              onChange={(event) => handleTogglePage(index, event.target.checked)}
            />
          </label>
        ))}
      </div>

      <hr className="pages-divider" />

      <button type="button" className="button button-primary-done">
        {buttonLabel}
      </button>
    </section>
  )
}

export default PagesCard
