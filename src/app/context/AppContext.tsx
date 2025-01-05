'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { MenuItem } from '../type/menu'
import toast from 'react-hot-toast'

interface AppContextType {
  cart: MenuItem[]
  wishlist: MenuItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: string) => void
  addToWishlist: (item: MenuItem) => void
  removeFromWishlist: (itemId: string) => void
  clearCart: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<MenuItem[]>([])
  const [wishlist, setWishlist] = useState<MenuItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    const storedWishlist = localStorage.getItem('wishlist')
    if (storedCart) setCart(JSON.parse(storedCart))
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => [...prevCart, item])
    toast.success(`${item.name} added to cart!`)
  }

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
    toast.success('Item removed from cart!')
  }

  const addToWishlist = (item: MenuItem) => {
    setWishlist((prevWishlist) => [...prevWishlist, item])
    toast.success(`${item.name} added to wishlist!`)
  }

  const removeFromWishlist = (itemId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== itemId))
    toast.success('Item removed from wishlist!')
  }

  const clearCart = () => {
    setCart([])
    toast.success('Cart cleared!')
  }

  return (
    <AppContext.Provider value={{ 
      cart, 
      wishlist, 
      addToCart, 
      removeFromCart, 
      addToWishlist, 
      removeFromWishlist,
      clearCart
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

