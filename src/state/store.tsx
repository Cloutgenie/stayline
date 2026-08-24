import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { INITIAL_STUDENTS, needsAttention } from "../data/students";
import type { Risk, Student, Trigger } from "../types";

export type Filters = {
  trigger: Trigger | "all";
  owner: string | "all" | "unassigned";
  risk: Risk | "all";
};

const DEFAULT_FILTERS: Filters = {
  trigger: "all",
  owner: "all",
  risk: "all",
};

type Store = {
  students: Student[];
  selectedId: string | null;
  filters: Filters;
  select: (id: string | null) => void;
  setFilters: (patch: Partial<Filters>) => void;
  assignOwner: (studentId: string, ownerId: string | null) => void;
  toggleFollowUp: (studentId: string, followUpId: string) => void;
  markKept: (studentId: string) => void;
  reopen: (studentId: string) => void;
  attentionCount: number;
  openFollowUpCount: number;
  assignedCount: number;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filters, setFilterState] = useState<Filters>(DEFAULT_FILTERS);

  const select = useCallback((id: string | null) => {
    setSelectedId(id);
  }, []);

  const setFilters = useCallback((patch: Partial<Filters>) => {
    setFilterState((prev) => ({ ...prev, ...patch }));
  }, []);

  const assignOwner = useCallback((studentId: string, ownerId: string | null) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, ownerId } : s)),
    );
  }, []);

  const toggleFollowUp = useCallback((studentId: string, followUpId: string) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== studentId) return s;
        return {
          ...s,
          followUps: s.followUps.map((f) =>
            f.id === followUpId ? { ...f, done: !f.done } : f,
          ),
        };
      }),
    );
  }, []);

  const markKept = useCallback((studentId: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, risk: "kept" } : s)),
    );
  }, []);

  const reopen = useCallback((studentId: string) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== studentId) return s;
        const nextRisk: Risk = s.triggers.length >= 2 ? "high" : "watch";
        return { ...s, risk: nextRisk };
      }),
    );
  }, []);

  const attentionCount = useMemo(
    () => students.filter(needsAttention).length,
    [students],
  );

  const openFollowUpCount = useMemo(
    () =>
      students.reduce(
        (n, s) => n + s.followUps.filter((f) => !f.done).length,
        0,
      ),
    [students],
  );

  const assignedCount = useMemo(
    () => students.filter((s) => s.ownerId && s.risk !== "kept").length,
    [students],
  );

  const value = useMemo(
    () => ({
      students,
      selectedId,
      filters,
      select,
      setFilters,
      assignOwner,
      toggleFollowUp,
      markKept,
      reopen,
      attentionCount,
      openFollowUpCount,
      assignedCount,
    }),
    [
      students,
      selectedId,
      filters,
      select,
      setFilters,
      assignOwner,
      toggleFollowUp,
      markKept,
      reopen,
      attentionCount,
      openFollowUpCount,
      assignedCount,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): Store {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export function matchesFilters(student: Student, filters: Filters): boolean {
  if (filters.trigger !== "all" && !student.triggers.includes(filters.trigger)) {
    return false;
  }
  if (filters.owner === "unassigned" && student.ownerId) return false;
  if (
    filters.owner !== "all" &&
    filters.owner !== "unassigned" &&
    student.ownerId !== filters.owner
  ) {
    return false;
  }
  if (filters.risk !== "all" && student.risk !== filters.risk) return false;
  return true;
}
