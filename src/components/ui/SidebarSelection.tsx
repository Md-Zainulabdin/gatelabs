import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export interface SidebarSelectionItem {
  id: string;
  label: ReactNode;
}

interface SidebarSelectionProps {
  items: SidebarSelectionItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

/**
 * Reusable sidebar selection component.
 * Renders a list of selectable items and highlights the current selection.
 */
export const SidebarSelection = ({
  items,
  selectedId,
  onSelect,
  className,
}: SidebarSelectionProps) => {
  return (
    <div className={className ?? "sidebar-selection"}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`sidebar-selection-item ${
            selectedId === item.id ? "sidebar-selection-item-active" : ""
          }`}
        >
          <span>{item.label}</span>
          <ChevronRight
            className={`w-4 h-4 ${selectedId === item.id ? "opacity-100" : "opacity-0"}`}
          />
        </button>
      ))}
    </div>
  );
};
