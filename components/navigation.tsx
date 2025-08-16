"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "./logo"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary px-3 py-2 rounded-2xl text-sm font-medium transition-colors"
              >
                Home
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary px-3 py-2 rounded-2xl text-sm font-medium transition-colors flex items-center gap-1">
                  Products <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-2xl">
                  <DropdownMenuItem>Content Creation</DropdownMenuItem>
                  <DropdownMenuItem>AI Solutions</DropdownMenuItem>
                  <DropdownMenuItem>Automation Tools</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="#services"
                className="text-foreground hover:text-primary px-3 py-2 rounded-2xl text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary px-3 py-2 rounded-2xl text-sm font-medium transition-colors"
              >
                About
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="rounded-2xl">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="rounded-2xl">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-2xl mt-2 shadow-lg">
              <a
                href="#home"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-2xl text-base font-medium"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-2xl text-base font-medium"
              >
                Products
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-2xl text-base font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-2xl text-base font-medium"
              >
                About
              </a>
              <Button className="w-full mt-2 rounded-2xl">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
