'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export default function AddCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProduct() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProduct}
    >
      Adicionar ao carrinho
    </button>
  )
}
