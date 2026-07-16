export interface OwnershipStake {
  name: string;
  percentage: number;
  color: string;
  shareValue: number;
}

export interface BoardMember {
  name: string;
  role: string;
  photoUrl?: string;
}

export interface CapitalAllocationItem {
  name: string;
  percentage: number;
  color: string;
}

export interface OperationLocation {
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: "headquarters" | "regional-hq" | "manufacturing";
  note?: string;
}

export interface CompanyYear {
  company: string;
  ticker?: string;
  year: number;
  ceo: BoardMember;
  board: BoardMember[];
  ownership: OwnershipStake[];
  valuation: number;
  stockUnitValue?: number;
  notes?: string;
  moatScore?: number; // 1-10 scale
  moatLabel?: string; // e.g. "Emerging", "Strong", "Dominant"
  moatNote?: string;
  capitalAllocation?: CapitalAllocationItem[]; // sums to 100
}
