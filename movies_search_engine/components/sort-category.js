// Sort Category component responsible for showacasing or present the each sort category to the sort panel on the left side of the website

export default function SortCategory({ sort, onSortChange, isSelected }) {
    return (
      <div
        className={`flex font-medium flex-row justify-between cursor-pointer mb-2 px-4 text-xl hover:bg-slate-100 ${isSelected ? 'bg-slate-300' : ''}`}
        onClick={() => onSortChange(sort)}
      >
        {sort}
      </div>
    )
  }