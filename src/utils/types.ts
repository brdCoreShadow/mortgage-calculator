export interface IMortgage {
  amount: number;
  term: number;
  rate: number;
  type: string;
}

export type PropsChidren = {
    children: React.ReactNode;
}