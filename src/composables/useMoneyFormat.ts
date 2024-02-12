export const useMoneyFormat = (sum: number) => {
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(sum);
};
