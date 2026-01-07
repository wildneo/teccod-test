/** biome-ignore-all lint/correctness/noUnusedVariables: <This is a global types> */

type Service = {
  id: string;
  name: string;
  price: number;
  description?: string;
  icon?: string;
};

type CartItem = {
  service: Service;
  quantity: number;
};
