/**
 * 선택한 상품의 옵션을 포함한 총 금액을 계산한다.
 * @param selectedProduct 선택한 상품
 * @returns {Number} 선택한 상품의 옵션을 포함한 총 금액
 */
export const calcSelectedProductPrice = (selectedProduct) => {
  return selectedProduct.options.reduce((acc, cur) => acc + (cur.cost * cur.count), 0)
};
