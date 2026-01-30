'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      className="border border-neutral-200/80 rounded-xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between text-right bg-white hover:bg-primary-50/50 transition-colors duration-300 group"
        whileTap={{ scale: 0.98 }}
      >
        <span className={`text-lg sm:text-xl font-bold transition-colors pr-3 ${isOpen ? 'text-primary-600' : 'text-neutral-900 group-hover:text-primary-700'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
          className={`p-2 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-primary-100' : 'bg-neutral-100 group-hover:bg-primary-100'}`}
        >
          <HiChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isOpen ? 'text-primary-600' : 'text-neutral-600'}`} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 bg-gradient-to-br from-neutral-50/50 to-primary-50/30 text-neutral-700 leading-relaxed text-base"
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface AccordionProps {
  items: Array<{ id: string; question: string; answer: string }>
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <AccordionItem
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default Accordion
