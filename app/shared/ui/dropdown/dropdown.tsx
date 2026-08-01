"use client";

import cn from "clsx";
import {
  createContext,
  type ReactNode,
  useContext,
  type ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";

function useDropdown() {
  const [isOpen, setOpen] = useState(false);
  const dropdownId = useId();

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdownElement = document.querySelector(
        `[data-dropdown-id="${dropdownId}"]`,
      );

      if (dropdownElement && !dropdownElement.contains(target)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", onPointerDown);
    }

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen, dropdownId, closeDropdown]);

  return {
    isOpen,
    dropdownId,
    closeDropdown,
    toggleDropdown,
  };
}

type DropdownContextValue = ReturnType<typeof useDropdown>;

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within Dropdown.Root");
  }
  return context;
}

type DropdownRootProps = {
  children: ReactNode;
  className?: string;
};

function DropdownRoot({ children, className }: DropdownRootProps) {
  const dropdown = useDropdown();

  return (
    <DropdownContext.Provider value={dropdown}>
      <div className={className} data-dropdown-id={dropdown.dropdownId}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

type DropdownTriggerRenderProps = {
  isOpen: boolean;
  dropdownId: string;
  onClick: (e: React.MouseEvent) => void;
  "aria-expanded": boolean;
  "aria-controls": string;
};

type DropdownTriggerProps = {
  children: (props: DropdownTriggerRenderProps) => ReactNode;
};

function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { isOpen, dropdownId, toggleDropdown } = useDropdownContext();

  return (
    <>
      {children({
        isOpen,
        dropdownId,
        onClick: toggleDropdown,
        "aria-expanded": isOpen,
        "aria-controls": dropdownId,
      })}
    </>
  );
}

type DropdownContentProps = ComponentPropsWithoutRef<"div">;

function DropdownContent({
  children,
  className,
  ...props
}: DropdownContentProps) {
  const { isOpen, dropdownId } = useDropdownContext();

  return (
    <div
      id={dropdownId}
      className={cn("dropdown", isOpen && "is-open", className)}
      {...props}
    >
      {children}
    </div>
  );
}

type DropdownItemRenderProps = {
  closeDropdown: () => void;
  onClick: (e: React.MouseEvent) => void;
};

type DropdownItemProps = {
  children: (props: DropdownItemRenderProps) => ReactNode;
  closeOnClick?: boolean;
};

function DropdownItem({ children, closeOnClick = true }: DropdownItemProps) {
  const { closeDropdown } = useDropdownContext();

  const handleClick = () => {
    if (closeOnClick) {
      closeDropdown();
    }
  };

  return (
    <>
      {children({
        closeDropdown,
        onClick: handleClick,
      })}
    </>
  );
}

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
};
